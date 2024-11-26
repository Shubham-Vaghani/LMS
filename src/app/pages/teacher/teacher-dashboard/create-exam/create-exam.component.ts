import { Component, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { createExam } from 'src/app/store/actions/exam.actions';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent {
  @Input() drawer: any;
  @ViewChild('stepper') stepper!: MatStepper;
  loading$ = this.store.select((state: any) => state.exam.loading);
  isEditable = false;
  subjects = ['Math', 'Science', 'History', 'English'];

  firstFormGroup = this._formBuilder.group({
    examDateTime: ['', Validators.required],
    subject: ['', Validators.required],
    topicName: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    questions: this._formBuilder.array([this.createQuestionGroup()]),
  });

  constructor(private _formBuilder: FormBuilder, private store: Store) {}

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
      _id: Math.random().toString(36).substring(2, 11),
      isInDraftMode: false,
      createDate: new Date().getTime().toString(),
      examDate: this.firstFormGroup.value.examDateTime
        ? new Date(this.firstFormGroup.value.examDateTime).getTime().toString()
        : '',
      subject: this.firstFormGroup.value.subject || '',
      topic: this.firstFormGroup.value.topicName || '',
      question: this.questions.value.map((q: any) => ({
        question: q.question,
        options: [q.option1, q.option2, q.option3, q.option4],
        answer: q.correctAnswer,
      })),
    };

    console.log(formData);
    this.store.dispatch(createExam({ exam: formData }));
    this.resetForm();
    this.drawer.close();
  }
}
