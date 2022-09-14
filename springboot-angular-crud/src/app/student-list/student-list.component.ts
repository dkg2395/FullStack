import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentsList().subscribe((response: Student[]) => {
      this.students = response;
    });
  }
  deleteStudent(id) {
    this.studentService.deleteStudent(id).subscribe((response) => {
      console.log(response);
      this.students = this.students.filter(s => {
        return s.id != id;
      });
    });
  }



}
