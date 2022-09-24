import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { ConfigService } from './config.service';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http:HttpClient) { }

  ngOnInit():void {
   
  }
 
  apiCall()
  {
    return this._http.get('http://localhost/phpWorking/ApiFiles/Dashboards/public/index.php/working/getUserdata');
  }

  getLogin()
  {
    return this._http.get("http://localhost/phpWorking/ApiFiles/Dashboards/public/index.php/working/loginCount");
  }
  

  
}
