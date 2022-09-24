import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: Http) { }

  // _a8Path:string=' http://localhost/phpWorking/ApiFiles/Dashboards/public/';
  _url_api_alert: string = "http://192.168.1.7/iris-a8/alert/public/";
    _gallery: string = "http://192.168.1.7/iris-a8/apigallery";
    _url_api: string = 'http://192.168.1.7/iris-a8:5000/';
    _php_dashboard_api:string = 'http://192.168.1.7/iris-a8/db/machineDashboard/';
    _php_dashboard_api1:string = 'http://192.168.1.7/iris-a8/phpFiles/';
    _download_path:string='http://192.168.1.7/iris-a8/MicroService/';
    _a8Path:string='http://192.168.1.7/iris-a8/iris/public/';
    _file_upload:string='http://192.168.1.7/iris-a8/Masters/public/';

}
