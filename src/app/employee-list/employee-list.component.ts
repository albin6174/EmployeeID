import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees:any

  constructor(private service:EmployeeService, private router:Router) { }
  ngOnChanges(): void {
    this.service.getAllEmployees().then(res=>res.json()).then(data=>this.employees=data)
  }
  ngOnInit(): void {
    this.service.getAllEmployees().then(res=>res.json()).then(data=>this.employees=data)
  }
  redirectToEmployeedetail(id:any){
    this.router.navigateByUrl(`employee/${id}`)
  }
  deleteEmployee(id:any){
    this.service.deleteEmployee(id).then(res=>this.ngOnInit())
  }
}
