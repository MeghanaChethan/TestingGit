import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OeeServiceService } from '../services/oee-service.service';

// interface Student {  
//   id: Number;  
//   name: String;  
//   email: String;  
//   gender: String;  
// }  

@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.scss']
})
export class OeeComponent implements OnInit {


  machine:any;
  date:any;
  oee:any;
  shift_dur:any;
  shift_break_dur:any;
  idle_duration:any;
  breakdown_duration:any;
  setup_duration:any;
  cycling_count:any;
  not_ok:any;
  production_plan_time:any;
  operational_time:any;
  good_part:any;
  availability_percentage:any;
  performance_percentage:any;
  quality_percentage:any;
  total_time_to_produce_part:any;
  produced_part_in_min:any;
  idle:any;
  setup:any;
  breakdown:any;
  shift_break:any;
  program_no:[];
  oee_type:any;
  showMe:any;

 
  constructor(private _http: HttpClient, private oeeService: OeeServiceService) {

  }

  ngOnInit(): void {

    this.getOeeData();

  }

  getOeeData() {
    this.oeeService.getOee().subscribe((data) => {

      

     if(data['success'] == 1){

      let finalData = data['finalData'];
      let machines_data = data['finalData'][0].machines_data;
      // let program_no = data['finalData'][0].program_no;

      this.oee_type = machines_data['oee_type'];

      if(this.oee_type == 0){
        this.showMe = 'Plan Wise';
      }else{
        this.showMe = 'Program No Wise';
      }

      this.machine = finalData[0].machine;
      this.date = finalData[0].date;
      this.oee = finalData[0].oee;
      this.shift_dur = finalData[0].shift_dur;
      this.shift_break_dur = finalData[0].shift_break_dur;
      this.idle_duration = finalData[0].idle_duration;
      this.breakdown_duration = finalData[0].breakdown_duration;
      this.setup_duration = finalData[0].setup_duration;
      this.cycling_count = finalData[0].cycling_count;
      this.not_ok = finalData[0].not_ok;
      this.production_plan_time = finalData[0].production_plan_time;
      this.operational_time = finalData[0].operational_time;
      this.good_part = finalData[0].good_part;
      this.availability_percentage = finalData[0].availability_percentage;
      this.performance_percentage = finalData[0].performance_percentage;
      this.quality_percentage = finalData[0].quality_percentage;

      this.program_no = data['finalData'][0].program_no;

      this.total_time_to_produce_part = finalData[0].total_time_to_produce_part;
      this.produced_part_in_min = finalData[0].produced_part_in_min;

      this.idle = finalData[0].idle;
      this.setup = finalData[0].setup;
      this.breakdown = finalData[0].breakdown;
      this.shift_break = finalData[0].shift_break;
     



    
     }else{
       alert('No Data Found');
     
     }


    });
  }





}
