import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [LoginsignupComponent, SidebarComponent, QuestionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
  ],
  exports: [LoginsignupComponent, SidebarComponent, QuestionComponent],
})
export class ComponentsModule {}
