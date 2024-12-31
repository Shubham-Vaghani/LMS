import { Component, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import {
  createExam,
  loadExams,
  updateExam,
} from 'src/app/store/exam/exam.actions';
import { examStateSelector } from 'src/app/store/exam/exam.selectors';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent {
  @Input() drawer: any;
  @Input() editExamData!: any;
  @ViewChild('stepper') stepper!: MatStepper;
  isloading!: boolean;
  isEditable = false;
  subjects = ['Math', 'Science', 'History', 'English'];
  examsLoaded = false;

  firstFormGroup = this._formBuilder.group({
    examDateTime: [null as Date | null, Validators.required],
    subject: ['', Validators.required],
    topicName: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    questions: this._formBuilder.array([this.createQuestionGroup()]),
  });

  constructor(private _formBuilder: FormBuilder, private store: Store) {
    this.store.select(examStateSelector).subscribe((res: any) => {
      this.isloading = res.loading;
      if (!res.error) {
        if (!res.loading) {
          this.drawer?.close();
          if (this.stepper) {
            this.resetForm();
          }
        }
      }
    });
  }

  ngOnChanges(): void {
    if (this.editExamData) {
      this.firstFormGroup.patchValue({
        subject: this.editExamData.subject || '',
        examDateTime: new Date(parseInt(this.editExamData.examDateTime)),
        topicName: this.editExamData.topicName || '',
      });

      const questions = this.editExamData.questions || [];
      this.questions.clear();
      questions.forEach((question: any) => {
        const questionGroup = this.createQuestionGroup();
        questionGroup.patchValue({
          question: question.question,
          option1: question.options[0],
          option2: question.options[1],
          option3: question.options[2],
          option4: question.options[3],
          correctAnswer: question.answer,
        });
        this.questions.push(questionGroup);
      });
    }
  }

  get questions(): FormArray {
    return this.secondFormGroup.get('questions') as FormArray;
  }

  createQuestionGroup(): FormGroup {
    return this._formBuilder.group({
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctAnswer: [null, Validators.required],
    });
  }

  addQuestion(): void {
    this.questions.push(this.createQuestionGroup());
    console.log(this.firstFormGroup.value, 'firstFormGroup');
    console.log(this.secondFormGroup.value, 'secondFormGroup');
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  resetForm() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.questions.clear();
    this.questions.push(this.createQuestionGroup());
    this.stepper.reset();
  }

  handleFormData(): void {
    const formData = {
      _id: this.editExamData
        ? this.editExamData._id
        : Math.random().toString(36).substring(2, 11),
      isInDraftMode: false,
      createDate: new Date().getTime().toString(),
      examDateTime: this.firstFormGroup.value.examDateTime
        ? new Date(this.firstFormGroup.value.examDateTime).getTime().toString()
        : '',
      subject: this.firstFormGroup.value.subject || '',
      topicName: this.firstFormGroup.value.topicName || '',
      questions: this.questions.value.map((q: any) => ({
        question: q.question,
        options: [q.option1, q.option2, q.option3, q.option4],
        correctOption: q.correctAnswer,
      })),
    };

    if (!this.editExamData) {
      this.store.dispatch(createExam({ exam: formData }));
      this.store.dispatch(loadExams());
    } else {
      this.store.dispatch(updateExam({ exam: formData }));
      this.editExamData = false;
      this.store.dispatch(loadExams());
    }
  }
}
