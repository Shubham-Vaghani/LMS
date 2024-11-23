import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-review',
  templateUrl: './exam-review.component.html',
  styleUrls: ['./exam-review.component.scss'],
})
export class ExamReviewComponent {
  questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctOption: 'Paris',
      selectedOption: 'London',
    },
    {
      id: 2,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctOption: '4',
      selectedOption: '5',
    },
    {
      id: 3,
      question: 'What is the capital of Spain?',
      options: ['Madrid', 'Lisbon', 'Rome', 'Athens'],
      correctOption: 'Madrid',
      selectedOption: 'Madrid',
    },
  ];

  currentQuestionIndex = 0;
  isReviewMode: boolean = false;

  constructor(private route: ActivatedRoute) {
    // for (let i = 4; i <= 100; i++) {
    //   this.questions.push({
    //     id: i,
    //     question: `Dummy question ${i}`,
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     correctOption: 'Option 1',
    //     selectedOption: 'Option 2',
    //   });
    // }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const examId = +params['id'];
      // Fetch exam data based on examId if needed
    });
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
}
