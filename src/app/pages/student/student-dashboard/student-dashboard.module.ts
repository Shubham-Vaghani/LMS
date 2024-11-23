import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from 'src/app/components/components.module';
import { ExamListComponent } from './exam-list/exam-list.component';
import { GivenExamComponent } from './given-exam/given-exam.component';
import { ExamComponent } from './exam/exam.component';
import { ExamReviewComponent } from './exam-review/exam-review.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children: [
      {
        path: 'exam-list',
        component: ExamListComponent,
      },
      {
        path: 'exam-list/:id',
        component: ExamComponent,
      },
      {
        path: 'given-exam',
        component: GivenExamComponent,
      },
      {
        path: 'given-exam/:id',
        component: ExamReviewComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    StudentDashboardComponent,
    GivenExamComponent,
    ExamListComponent,
    ExamComponent,
    ExamReviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class StudentDashboardModule {}
