import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-dashboard',
  templateUrl: './signup-dashboard.component.html',
  styleUrls: ['./signup-dashboard.component.scss']
})
export class SignupDashboardComponent implements OnInit {

  signupForm!:FormGroup;


  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit():void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }

  signUp(){
    this._http.post<any>("http://localhost/phpWorking/ApiFiles/Dashboards/public/index.php/working/signup", this.signupForm.value)
    .subscribe(res=>{
      alert("Registration Successfull" );
      this.signupForm.reset();
      this.router.navigate(['login-dashboard']);

    },
    err=>{
     alert("Something Went Wrong");
    })
  }


}
