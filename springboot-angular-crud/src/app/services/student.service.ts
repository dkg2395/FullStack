import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.API_BASE_URL;
  constructor(private http: HttpClient) { }

  getStudentsList() {
    return this.http.get(this.baseUrl + "/students");
  }
  getStudent(id) {
    return this.http.get(this.baseUrl + "/students/" + id);
  }
  deleteStudent(id) {
    return this.http.delete(this.baseUrl + "/students/" + id);
  }
  updateStudent(student: Student) {
    return this.http.put(this.baseUrl + "/students", student);
  }
  createStudent(student: Student) {
    return this.http.post(this.baseUrl + "/students", student);
  }
}
