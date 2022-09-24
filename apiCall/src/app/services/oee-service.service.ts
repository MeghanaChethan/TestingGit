import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OeeServiceService {

  url = "http://localhost/meghana/iris-a8/Reports_v2/public/index.php/oee/reportOeeCal";

  constructor(private _http:HttpClient) { }

  getOee(){
       return this._http.get(this.url);
  }
}
