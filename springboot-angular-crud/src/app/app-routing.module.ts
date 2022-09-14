import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: "register-student",
    component: RegisterStudentComponent
  }, {
    path: 'edit-student/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
