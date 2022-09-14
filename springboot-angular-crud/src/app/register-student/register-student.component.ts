import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  student = new Student();
  showAlert = false;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  saveStudent() {
    this.studentService.createStudent(this.student).subscribe((response) => {
      console.log(response);
      this.showAlert = true;
      this.student = new Student();
    });
  }

}
