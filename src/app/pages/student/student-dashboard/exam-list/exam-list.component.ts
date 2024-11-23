import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent {
  exams = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Exam ${i + 1}`,
    date: `2023-10-${(i % 30) + 1}`,
    score: Math.floor(Math.random() * 100),
    takenBy: `Teacher ${i + 1}`,
  }));

  constructor(private router: Router) {}

  goToExam(examId: number) {
    this.router.navigate(['/student-dashboard/exam-list', examId]);
  }
}
