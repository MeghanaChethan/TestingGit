import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/services/config.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currenTYear: any;
  presentYear: any;
  date = Date.now();
  loginForm: FormGroup;
  customer_code: string = '';
  username: string = '';
  password: string = '';


  imgList: any = [
    {
      path: 'assets/img/login/autoassembly.jpeg'
    },
    {
      path: 'assets/img/login/automation.jpeg'
    },
    {
      path: 'assets/img/login/iriscloudsolutions.jpeg'
    },
    {
      path: 'assets/img/login/productline.png'
    }
  ];

  ChangePassword: FormGroup;
  login: FormGroup;
  invalidCode: boolean = true;
  validateCode: boolean = true;
  invalidLogin: boolean = true;
  validateLogin: boolean = true;
  step1: boolean = true;
  step2: boolean = true;
  customername: string = '';
  inputValue: any;

  _gallery: string = this.config._gallery;
  filePath = "bfw-logo.png";
  apiGalleryPath = this._gallery;
  ServerfilesPath = this._gallery;
  closeResult: string;
  private dialogRef: any;
  private dialogRef1: any;

  hideconfirm: boolean = true;
  hidechangePassword: boolean = true;
  old_password = '';
  new_password = '';
  custArray = [];
  customer_key: string = '';
  animation = 'rubberBand';
  shakeAnimation = false;
  rubberAnimation = false;
  title_bar: string = 'Password can not be empty';
  buildPercent: number = 0;

  constructor(private loginService: LoginService, private router: Router, private datepipe: DatePipe,
    fb: FormBuilder, private route: ActivatedRoute, public dialog: MatDialog,
    private snackBar: MatSnackBar, private toastr: ToastrService, private config: ConfigService
  ) {
    this.loginForm = fb.group({
      'customer_code': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
    this.ChangePassword = fb.group({
      'old_password': [null, Validators.required],
      'new_password': [null, Validators.required],
    })
  }

  userData: any = [];
  ngOnInit() {
    this.date = Date.now();
    this.currenTYear = this.datepipe.transform(this.date, 'yyyy');
    this.presentYear = this.currenTYear - 1;
    this.step1 = false;
    this.step2 = true;
    this.hidechangePassword = true;
    this.hideconfirm = true;
    var ua = navigator.userAgent.toLowerCase();

    this.userData = [];

    if (this.myBrowser() != "Firefox") {
      Swal.fire({
        title: 'Dear User',
        text: 'Kindly use latest version Firefox browser to a have better and smooth design experience',
        footer: '(Popup will get disappeared automatically after 5 seconds)',
        imageUrl: 'assets/img/logo/suggest.png',
        imageWidth: 200,
        imageHeight: 200,
        background: '#f5f5f5',
        imageAlt: 'Suggestion Image',
        // showConfirmButton: false,
        timer: 5000
      })
    }
    // this.checkIp();
  }



  loginCheck(loginValues, basic) {
    this.invalidLogin = true;
    this.validateLogin = false;
    this.customer_code = loginValues.customer_code;
    this.username = loginValues.username;
    this.password = loginValues.password;
    return this.loginService.loadCustomerData(this.customer_code).subscribe(
      (response) => {
        if (response.success == 1) {
          this.custArray = response.data;
          this.step1 = true;
          this.step2 = false;
          this.invalidCode = true;
          this.validateCode = true;
          if (response.data[0]['file_path'] != null || response.data[0]['file_path'] != '') {
            this.filePath = response.data[0]['file_path'];
          }
          this.customername = response.data[0]['customer'];
          this.apiGalleryPath = response.awsGalleryPath;
          this.ServerfilesPath = response.ServerfilesPath;
          this.customer_key = this.custArray[0]['customer_key'];

          return this.loginService.check_pwd_duration(this.customer_key, this.username).subscribe(
            (response) => {
              if (response['status'] == 1) {
                if (this.dialog.openDialogs.length == 0) {
                  const filterData = {
                    top: '25%',
                    left: '25%',
                  };
                  this.dialogRef = this.dialog.open(basic,
                    {
                      width: '450px',
                      height: '150',
                      disableClose: true,
                      panelClass: 'myapp-no-padding-dialog'

                    });
                }
                this.hideconfirm = false;
              }

              else if (response['status'] == 0) {
                let param =
                {
                  "customer_code": loginValues.customer_code,
                  "username": loginValues.username,
                  "password": loginValues.password
                }
                return this.loginService.login(param).subscribe(
                  (response) => {
                    if (response.success == 1) {
                      this.router.navigate(['/', 'newlanding']).then(nav => {
                      }, err => {
                        console.log(err) // when there's an error
                      });
                      this.invalidLogin = true;

                      this.validateLogin = true;
                      this.toastr.success(response.msg);

                    } else {
                      this.invalidLogin = false;
                      this.validateLogin = true;
                      this.toastr.error(response.msg);
                      this.animateme1();

                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                )
              }
            },
            (error) => {
              console.log(error);
            }
          );

        } else {
          this.custArray = [];
          this.step1 = false;
          this.step2 = true;
          this.invalidCode = false;
          this.validateCode = true;
          this.toastr.error(response.msg);
          this.animateme();
        }
      },
      (error) => {
        console.log(error);
      }
    )


  }
  checkCustomer() {
    this.invalidCode = true;
    this.validateCode = false;
    this.customer_code = this.customer_code;
    return this.loginService.loadCustomerData(this.customer_code).subscribe(
      (response) => {
        if (response.success == 1) {
          this.custArray = response.data;
          this.step1 = true;
          this.step2 = false;
          this.invalidCode = true;
          this.validateCode = true;
          if (response.data[0]['file_path'] != null || response.data[0]['file_path'] != '') {
            this.filePath = response.data[0]['file_path'];
          }
          this.customername = response.data[0]['customer'];
          this.apiGalleryPath = response.awsGalleryPath;
          this.ServerfilesPath = response.ServerfilesPath;
          this.customer_key = this.custArray[0]['customer_key'];

        } else {
          this.custArray = [];
          this.step1 = false;
          this.step2 = true;
          this.invalidCode = false;
          this.validateCode = true;
          this.animateme();
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  showForm() {
    this.hideconfirm = true;
    this.hidechangePassword = false;
  }


  changePassword(formData) {
    let param = {
      "customer_key": this.customer_key,
      "username": this.username,
      "everify": this.old_password,
      "newpwd": this.new_password,
    }
    return this.loginService.change_password(param).subscribe(
      (response) => {
        if (response.success == 1) {
          this.onNoClick();
          let newparam = {
            "customer_code": this.customer_code,
            "username": this.username,
            "password": this.new_password,
          }
          return this.loginService.login(newparam).subscribe(
            (response) => {
              if (response) {
                this.router.navigate(['/', 'newlanding']).then(nav => {
                  // var utterance = new (<any>window).SpeechSynthesisUtterance();
                  // var synth = window.speechSynthesis;
                  // var voices = synth.getVoices();
                  // for (let i = 0; i < voices.length; i++) {
                  //   if (voices[i].name === 'English_(America)') {
                  //     utterance.voice = voices[i];
                  //   }
                  // }
                  // utterance.rate = 0.5;
                  // utterance.pitch = 0.5;
                  // utterance.lang = 'en-US';
                  // var words = new SpeechSynthesisUtterance("hello welcome to IRIS");
                  // speechSynthesis.speak(words);
                  // speechSynthesis.addEventListener('end', function (event) {
                  //   speechSynthesis.cancel()
                  // });

                }, err => {
                  console.log(err) // when there's an error
                });
                this.invalidLogin = true;
                this.validateLogin = true;
                this.toastr.success(response.msg);

              } else {
                this.invalidLogin = false;
                this.validateLogin = true;
                this.toastr.error(response.msg);

              }
            },
            (error) => {
              console.log(error);
            }
          )
        } else {

        }
      },
      (error) => {
        console.log(error);
      }
    )

  }
  skipLogin() {
    let param = {
      "customer_code": this.customer_code,
      "username": this.username,
      "password": this.password
    }
    return this.loginService.login(param).subscribe(
      (response) => {
        if (response.success == 1) {
          this.router.navigate(['/', 'newlanding']).then(nav => {
          }, err => {
            console.log(err) // when there's an error
          });
          this.invalidLogin = true;
          this.validateLogin = true;
          this.toastr.success(response.msg);
        } else {
          this.invalidLogin = false;
          this.validateLogin = true;
          this.toastr.error(response.msg);

        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.title_bar = "Password can not be empty";
  }

  animateme() {
    this.shakeAnimation = false;
    setTimeout(() => {
      this.shakeAnimation = true;
    }, 1);
  }
  animateme1() {
    this.rubberAnimation = false;
    setTimeout(() => {
      this.rubberAnimation = true;
    }, 1);
  }


  validation(type) {
    this.buildPercent = 0;
    this.inputValue = null;
    this.title_bar = "Password can not be empty";
    document.getElementById("myBar").style.width = "100%";
    document.getElementById("myBar").style.background = "#FF0000";
    if (type == 1) {
      this.inputValue = (<HTMLInputElement>document.getElementById('pwd')).value;
    }
    else if (type == 2) {
      this.inputValue = (<HTMLInputElement>document.getElementById('new_password')).value;
    }
    let upercase: string = "(?=.*?[A-Z])";
    let lowercase: string = "(?=.*?[a-z])";
    let specialChar: string = "(?=.*?[#?!@$%^&*-])";
    let number: string = "(?=.*?[0-9])";
    let pattern4: string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])";
    let fullpattern: string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,15}$";
    if (this.inputValue != '') {
      if (this.inputValue.match(upercase) || this.inputValue.match(lowercase) || this.inputValue.match(number) || this.inputValue.match(specialChar)) {
        this.buildPercent += 20;
        this.title_bar = "Password is Weak";
        document.getElementById("myBar").style.width = "40%";
        document.getElementById("myBar").style.background = "#FF0000";
      }
      if ((this.inputValue.match(upercase) && this.inputValue.match(lowercase)) ||
        (this.inputValue.match(upercase) && this.inputValue.match(number)) ||
        (this.inputValue.match(upercase) && this.inputValue.match(specialChar)) ||
        (this.inputValue.match(lowercase) && this.inputValue.match(number)) ||
        (this.inputValue.match(lowercase) && this.inputValue.match(specialChar)) ||
        (this.inputValue.match(number) && this.inputValue.match(specialChar))
      ) {
        this.buildPercent += 20;
        document.getElementById("myBar").style.width = "40%";
        document.getElementById("myBar").style.background = "#FF4500";
      }
      if ((this.inputValue.match(upercase) && this.inputValue.match(lowercase) && this.inputValue.match(number)) ||
        (this.inputValue.match(specialChar) && this.inputValue.match(lowercase) && this.inputValue.match(number)) ||
        (this.inputValue.match(specialChar) && this.inputValue.match(upercase) && this.inputValue.match(number)) ||
        (this.inputValue.match(specialChar) && this.inputValue.match(upercase) && this.inputValue.match(lowercase))
      ) {
        this.buildPercent += 20;
        this.title_bar = "Password is Medium";
        document.getElementById("myBar").style.width = "60%";
        document.getElementById("myBar").style.background = "#FF8C00";
      }
      if (this.inputValue.match(pattern4)) {
        this.buildPercent += 20;
        this.title_bar = "Password is Average";
        document.getElementById("myBar").style.width = "80%";
        document.getElementById("myBar").style.background = "#4169E1";
      }
      if (this.inputValue.match(fullpattern)) {
        this.buildPercent += 20;
        this.title_bar = "Password is Strong";
        document.getElementById("myBar").style.width = "100%";
        document.getElementById("myBar").style.background = "#32CD32";
      }
    } else {
      this.title_bar = "Password can not be empty";
      document.getElementById("myBar").style.width = "100%";
      document.getElementById("myBar").style.background = "#FF0000";
    }
  }


  myBrowser() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      return 'Opera';

    } else if (navigator.userAgent.indexOf("Chrome") != -1) {

      return 'Chrome';

    } else if (navigator.userAgent.indexOf("Safari") != -1) {

      return 'Safari';

    } else if (navigator.userAgent.indexOf("Firefox") != -1) {

      return 'Firefox';

    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.DOCUMENT_NODE == true)) {

      return 'IE';

    } else {

      return 'unknown';

    }

  }
}
