import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})



export class UpdatestudentComponent implements OnInit {
  studentItem= {
    name:'',
    email:'',
    highestqualification:'',
    passoutyear:'',
    skillset:'',
    course:'',
    imageUrl:''}
 
  constructor(private router:Router,private studentService:StudentserviceService) { }

  ngOnInit(): void {
    let studentId = localStorage.getItem("editStudentId");
    this.studentService.getStudent(studentId).subscribe((data:any)=>{
      this.studentItem=JSON.parse(JSON.stringify(data));
  })
  }
  editStudent()
  {    
    this.studentService.editStudent(this.studentItem);   
    alert("Success");
    this.router.navigate(['students']);
  }

}
