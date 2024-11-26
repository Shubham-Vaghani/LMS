import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() role: 'student' | 'teacher' = 'student';
  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  isActive(route: string): boolean {
    return this.activeRoute.includes(route);
  }

  getRoutes() {
    if (this.role === 'student') {
      return [
        { name: 'Exam List', route: '/student-dashboard/exam-list' },
        {
          name: 'Given Exam',
          route: '/student-dashboard/given-exam',
          badge: 4,
        },
      ];
    } else {
      return [
        { name: 'Exam', route: '/teacher-dashboard/exam' },
        {
          name: 'Add Question',
          route: '/teacher-dashboard/add-question',
          badge: 2,
        },
        {
          name: 'Exam Result',
          route: '/teacher-dashboard/exam-result',
        },
      ];
    }
  }
}
