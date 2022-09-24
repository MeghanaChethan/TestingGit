import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  myDate = new Date();

  allLoginCount : any;
  date: Date;
  latest_date: string;

  constructor(private datePipe: DatePipe, private api:LoginService) { 
  
  }

  ngOnInit() {
    this.getAllData();
    this.myFunction();
  }

  myFunction(){
    this.date=new Date();
    this.latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd H:m:s');
   }
  getAllData(){
    this.api.getLogin().subscribe(res=>{
      this.allLoginCount = res['data'];
    })
  }

}
