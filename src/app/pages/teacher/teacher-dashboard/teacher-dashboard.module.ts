import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
} from '@angular-material-components/datetime-picker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      {
        path: 'exam',
        component: ExamComponent,
      },
      {
        path: 'add-question',
        component: AddQuestionComponent,
      },
      {
        path: 'exam-result',
        component: ExamResultComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    CreateExamComponent,
    AddQuestionComponent,
    ExamResultComponent,
    ExamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatProgressSpinnerModule,
  ],
})
export class TeacherDashboardModule {}
