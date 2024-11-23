import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss'],
})
export class LoginsignupComponent {
  isSignup = false;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    this.router.navigate(['/student-dashboard']);

    if (form.valid) {
      // Perform login or signup action
      console.log('Form Submitted', form.value);
    }
  }
}
