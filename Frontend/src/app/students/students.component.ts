import { Component, OnInit } from '@angular/core';

import { StudentserviceService } from '../studentservice.service';

import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})



export class StudentsComponent {
  pageTitle: string = 'Student Details';
  imageWidth: number = 50;
  imageMargin: number = 2;

  students=[{
    name:'',
    email:'',
    highestqualification:'',
    passoutyear:'',
    skillset:'',
    course:'',
    imageUrl:''}]
  

  constructor(private router:Router,private studentService: StudentserviceService,){   
    
  }
  ngOnInit(): void{
    this.studentService.getStudents().subscribe((data:any)=>{
      this.students=JSON.parse(JSON.stringify(data));
  })
  }
  
  

 
  editStudent(student:any)
  {
    localStorage.setItem("editStudentId", student._id.toString());
    this.router.navigate(['update']);

  }
  deleteStudent(student:any)
  {
    this.studentService.deleteStudent(student._id)
      .subscribe((data:any) => {
        this.students = this.students.filter(s => s !== student);
      })
  

  }
}