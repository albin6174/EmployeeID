import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  messageText=""
  messageClass=""
  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email])

  })

  get username(){
    return this.regForm.get("username")

  }

  get password(){
    return this.regForm.get("password")

  }  

  get email(){
    return this.regForm.get("email")

  }  
  
  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  signUp(){
    console.log(this.regForm.value);
    this.router.navigateByUrl("")
  }
}
