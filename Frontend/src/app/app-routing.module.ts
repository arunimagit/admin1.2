import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';


const routes: Routes = [{
  path: 'students',
  component: StudentsComponent
},{
  path:'insert', 

component: NewstudentComponent,
},{
  path:'update',
  
  component:UpdatestudentComponent
},{
  path: '',
  redirectTo: '/students',
  pathMatch: 'full'
},]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
