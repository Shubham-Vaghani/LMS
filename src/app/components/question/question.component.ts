import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() questions: any[] = [];
  @Input() currentQuestionIndex: number = 0;
  @Input() isReviewMode: boolean = false;
  @Output() currentQuestionIndexChange = new EventEmitter<number>();

  getButtonClass(index: number): string {
    if (index === this.currentQuestionIndex) {
      return 'current-question';
    } else if (this.questions[index].selectedOption) {
      return 'answered-question';
    } else {
      return 'default-question';
    }
  }

  selectQuestion(index: number) {
    this.currentQuestionIndex = index;
    this.currentQuestionIndexChange.emit(this.currentQuestionIndex);
  }
}
