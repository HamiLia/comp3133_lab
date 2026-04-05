import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  template: `<h2>{{ getTitle() }} - {{ getCurrentDate() }}</h2>`,
})
export class StudentsComponent {
  title = 'My List of Students';
  getTitle() {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
