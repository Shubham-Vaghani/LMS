import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-given-exam',
  templateUrl: './given-exam.component.html',
  styleUrls: ['./given-exam.component.scss'],
})
export class GivenExamComponent {
  givenExams = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    topic: `Subject ${i + 1}`,
    date: `2023-10-${15 + (i % 10)}`,
    time: `${10 + (i % 12)}:00 AM - ${12 + (i % 12)}:00 PM`,
  }));

  constructor(private router: Router) {}

  goToExamReview(examId: number) {
    this.router.navigate(['/student-dashboard/given-exam', examId]);
  }
}
