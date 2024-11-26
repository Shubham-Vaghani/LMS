import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss'],
})
export class LoginsignupComponent {
  @Input() role: string = '';
  isSignup = false;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    switch (this.role) {
      case 'student':
        this.router.navigate(['/student-dashboard']);
        break;
      case 'teacher':
        this.router.navigate(['/teacher-dashboard']);
        break;
    }

    if (form.valid) {
      // Perform login or signup action
      console.log('Form Submitted', form.value);
    }
  }
}
