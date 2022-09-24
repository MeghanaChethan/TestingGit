import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss']
})
export class LoginDashboardComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[],
    })
  }

  //login 
  logIn(){
    this._http.get<any>("http://localhost/phpWorking/ApiFiles/Dashboards/public/index.php/working/signupget").subscribe(res=>{

    const user = res['data'].find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password == this.loginForm.value.password
    })
    if(user)
    {
      alert("User Login Successfully");
      this.loginForm.reset();
      this.router.navigate(['home'])
    }
    else{
      alert("User Not Found !!");
    }
    }, err=>{
      alert("Something Went Wrong");
    })
  }

}
