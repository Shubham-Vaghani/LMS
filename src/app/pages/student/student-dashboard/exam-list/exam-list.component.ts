import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadExams } from 'src/app/store/exam/exam.actions';
import { examStateSelector } from 'src/app/store/exam/exam.selectors';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  exams: any;
  isLoading!: boolean;

  constructor(private router: Router, private store: Store) {
    this.store.select(examStateSelector).subscribe((res: any) => {
      this.isLoading = res.loading;
      this.exams = res.data;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadExams());
  }

  goToExam(examId: number) {
    this.router.navigate(['/student-dashboard/exam-list', examId]);
  }
}
