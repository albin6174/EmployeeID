import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  constructor(private router : Router){}

  ngOnInit(): void {
  }
  authenticate(){
    console.log(this.loginForm.value);

    this.router.navigateByUrl("index")
    
  }
}
