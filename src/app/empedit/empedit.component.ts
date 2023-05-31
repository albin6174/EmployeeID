import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit{
  id:any
  constructor(private route:ActivatedRoute, private service:EmployeeService, private router:Router){
    this.id=this.route.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.service.getEmployeeDetail(this.id).then(res=>res.json()).then(data=>this.updateForm(data))
  }
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

  updateForm(data:any){
  // this.empForm.patchValue(data)
     this.empForm.patchValue({
      name:data.name,
      email:data.email,
      department:data.department,
      phone:data.phone,
      salary:data.salary,
     }) 

  }

  editemployee(){
    let data=this.empForm.value
    this.service.editEmployee(data,this.id).then(res=>res.json()).then(data=>this.router.navigateByUrl("index")
    )
  }


 


  
}
