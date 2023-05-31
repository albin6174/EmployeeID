import { Component, OnInit} from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {

  empForm=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    department:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    salary:new FormControl("",Validators.required),

  })
  get name(){
    return this.empForm.get("name")
  }
  get email(){
    return this.empForm.get("email")
  }
  get department(){
    return this.empForm.get("department")
  }
  get phone(){
    return this.empForm.get("phone")
  }
  get salary(){
    return this.empForm.get("salary")
  }

  constructor(private service:EmployeeService,private router:Router){}

  ngOnInit(): void {
    
  }

  saveEmp(){
    console.log(this.empForm.value);
    let data=this.empForm.value
    this.service.employeeCreate (data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
  }
  
}
