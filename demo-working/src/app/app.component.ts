import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Admin Panel Layout';
    // opened = false;
    sideBarOpen=true;

    ngOnInit(): void {
        
    }

    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }



  //  title='material-demo';
  //  notifications=2;
  //  showSpinner = false;

  //  loadData(){
  //    this.showSpinner = true;
  //    setTimeout(() => {
  //      this.showSpinner = false;
  //    }, 5000);
  //  }

















//   loginbtn:boolean;
// logoutbtn:boolean;

// constructor(private dataService: ApiService) {
// dataService.getLoggedInName.subscribe(name => this.changeName(name));
// if(this.dataService.isLoggedIn())
// {
// console.log("loggedin");
// this.loginbtn=false;
// this.logoutbtn=true
// }
// else{
// this.loginbtn=true;
// this.logoutbtn=false
// }

// }

// private changeName(name: boolean): void {
// this.logoutbtn = name;
// this.loginbtn = !name;
// }
// logout()
// {
// this.dataService.deleteToken();
// window.location.href = window.location.href;
// }
}


