import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../services/login.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private config:ConfigService, private toastr: ToastrService) { }
  username: string;
  password: string;
  invalidLogin: boolean = true;
  validateLogin: boolean = true;
  ngOnInit() {
    this.loginService.apiCall().subscribe(() => {
      console.warn("get api data");
      // window.alert(data['msg']);

    })

  }





  // loginCheck(loginValues) {
  //   this.invalidLogin = true;
  //   this.validateLogin = false;
  //   this.username = loginValues.username;
  //   this.password = loginValues.password;

  //   return this.loginService.login(loginValues).subscribe((response) => {
  //     if (response['status'] == 1) {
  //       console.log("login");
  //     }else if (response['status'] == 0) {
  //       let param =
  //       {
  //         "customer_code": loginValues.customer_code,
  //         "username": loginValues.username,
  //         "password": loginValues.password
  //       }
  //       return this.loginService.login(param).subscribe(
  //         (response) => {
  //           if (response.success == 1) {

  //             this.router.navigate(['/', 'users']).then(nav => {
              
  //             }, err => {
  //               console.log(err) // when there's an error
  //             });
  //             this.invalidLogin = true;

  //             this.validateLogin = true;
  //             this.toastr.success(response.msg);

  //           } else {
  //             this.invalidLogin = false;
  //             this.validateLogin = true;
  //             this.toastr.error(response.msg);
            
  //           }
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       )
  //     }
  //   },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
    





    // if(this.username == 'admin' && this.password == 'admin'){
    //  this.router.navigate(["user"]);
    // }else {
    //   alert("Invalid credentials");
    // }
  }



