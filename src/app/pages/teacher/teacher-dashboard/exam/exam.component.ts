import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteExam, loadExams } from 'src/app/store/exam/exam.actions';
import { examStateSelector } from 'src/app/store/exam/exam.selectors';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  exams: any;
  isLoading!: boolean;
  editExamData!: {};

  constructor(private store: Store) {
    this.store.select(examStateSelector).subscribe((res: any) => {
      this.isLoading = res?.loading;
      this.exams = res?.data;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadExams());
  }

  examEdit(examId: any) {
    const exam = this.exams.find((e: any) => e._id === examId);
    this.drawer.open();
    this.editExamData = exam;
    console.log(exam);
  }

  examDelete(examId: any) {
    console.log(examId);
    this.store.dispatch(deleteExam({ id: examId }));
  }
}
