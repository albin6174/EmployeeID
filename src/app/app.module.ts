import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpeditComponent } from './empedit/empedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    EmployeeListComponent,
    EmpdetailComponent,
    EmpeditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
