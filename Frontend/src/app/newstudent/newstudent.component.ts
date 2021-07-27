import { Component, OnInit } from '@angular/core';

import { IStudent } from '../studentmodel';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})


export class NewstudentComponent implements OnInit {

  constructor(private studentService: StudentserviceService,private router: Router){  } 
  studentItem= {
     name:'',
     email:'',
     highestqualification:'',
     passoutyear:'',
     skillset:'',
     course:'',
     imageUrl:''}
    //  productItem: IProduct;
  ngOnInit() {
  }
  AddStudent()
  {    
    this.studentService.newStudent(this.studentItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['students']);
  }
}
