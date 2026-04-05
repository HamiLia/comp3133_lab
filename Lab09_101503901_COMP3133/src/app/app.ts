import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent, StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-app';
}
