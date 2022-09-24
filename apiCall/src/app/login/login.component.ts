import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this._http.post<any>("http://localhost/phpWorking/ApiFiles/Dashboards/public/index.php/working/login", this.loginForm.value)
    .subscribe(res=>{
          
      if(res['success']==1){
        // alert("Login Successfully");
        alert(res['msg']);
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else{
        alert("Invalid User");
      }
    },
    err=>{
      alert("Something Went Wrong in Login");
    })
  }

}
