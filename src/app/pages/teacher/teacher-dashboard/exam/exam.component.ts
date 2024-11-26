import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  exams$: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.exams$ = this.store.select((state: any) => state.exam.data);
  }
}
