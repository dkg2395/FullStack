import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student';
import { Response } from '../response';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id: number;
  student = new Student();
  showAlert = false;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.studentService.getStudent(this.id).subscribe((response: Response) => {
      this.student = response.data;
    });
  }
  updateStudent() {
    this.studentService.updateStudent(this.student).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
    });
  }
  closeAlert() {
    this.showAlert = false;
  }



}
