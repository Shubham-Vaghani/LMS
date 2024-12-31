import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { examStateSelector } from 'src/app/store/exam/exam.selectors';
import { saveExamResult } from 'src/app/store/examresult/examresult.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  questions: any[] = [];

  currentQuestionIndex = 0;
  isReviewMode: boolean = false;
  examId: string = '';

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.examId = params['id'];
    });

    this.store.select(examStateSelector).subscribe((res: any) => {
      const exam = res.data.filter((data: any) => data._id === this.examId);
      this.questions = exam[0].questions;
    });
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
    console.log(this.questions, 'question');
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  saveExam() {
    // const unansweredQuestions = this.questions.filter(
    //   (question) => !question.selectedOption
    // );

    // if (unansweredQuestions.length > 0) {
    //   this.snackBar.open('Some questions are unanswered!', 'Close', {
    //     duration: 3000,
    //   });
    //   return;
    // }

    const examResultData = { examId: this.examId, examResult: this.questions };

    this.store.dispatch(saveExamResult({ saveExam: examResultData }));
    // this.snackBar.open('Exam saved successfully!', 'Close', {
    //   duration: 3000,
    // });
  }
}
