import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private datePipe:DatePipe) { }
  currenTYear:any;
  presentYear:any;
  date = Date.now();
  ngOnInit() {
    this.date = Date.now();
  this.currenTYear = this.datePipe.transform(this.date, 'yyyy');
  this.presentYear=this.currenTYear-1;
  }

}
