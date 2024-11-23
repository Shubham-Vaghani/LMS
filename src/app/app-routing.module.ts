import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StudentLoginComponent } from './pages/student/student-login/student-login.component';
import { TeacherLoginComponent } from './pages/teacher/teacher-login/teacher-login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'student-login',
    component: StudentLoginComponent,
  },
  {
    path: 'teacher-login',
    component: TeacherLoginComponent,
  },
  {
    path: 'student-dashboard',
    loadChildren: () =>
      import('./pages/student/student-dashboard/student-dashboard.module').then(
        (m) => m.StudentDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
