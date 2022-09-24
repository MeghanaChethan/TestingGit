import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    constructor(private _http: Http) { }

       //---------------------local server---------------------------//


       _url_api_alert: string = "http://localhost/phpWorking/ApiFiles/Dashboards/public/";
       _gallery: string = "http://localhost/phpWorking/FilesStorage/apigallery";
       _url_api: string = 'http://localhost/phpWorking/FilesStorage:5000/';
       _php_dashboard_api:string = 'http://localhost/phpWorking/FilesStorage/db/machineDashboard/';
       _php_dashboard_api1:string = 'http://localhost/phpWorking/FilesStorage/phpFiles/';
       _download_path:string='http://localhost/phpWorking/FilesStorage/MicroService/';
       _a8Path:string='http://localhost/phpWorking/ApiFiles/Dashboards/public/';
       _file_upload:string='http://localhost/phpWorking/FilesStorage/Masters/public/';
   



    //............................dev server.................................//

    // migration a8 config //

    // _url_api_alert: string = "http://192.168.1.7/iris-a8/alert/public/";
    // _gallery: string = "http://192.168.1.7/iris-a8/apigallery";
    // _url_api: string = 'http://192.168.1.7/iris-a8:5000/';
    // _php_dashboard_api:string = 'http://192.168.1.7/iris-a8/db/machineDashboard/';
    // _php_dashboard_api1:string = 'http://192.168.1.7/iris-a8/phpFiles/';
    // _download_path:string='http://192.168.1.7/iris-a8/MicroService/';
    // _a8Path:string='http://192.168.1.7/iris-a8/iris/public/';
    // _file_upload:string='http://192.168.1.7/iris-a8/Masters/public/';

    //............................. Angular 8 Live Server...................................//

    // _url_api_alert: string = "https://m2nxt.in/alert/public/";
    // _gallery: string = "https://m2nxt.in/apigallery";
    // _url_api: string = 'https://m2nxt.in:5000/';
    // _php_dashboard_api: string = 'https://m2nxt.in/db/machineDashboard/';
    // _php_dashboard_api1: string = 'https://m2nxt.in/phpFiles/';
    // _download_path: string = 'https://m2nxt.in/MicroService/';
    // _a8Path: string = 'https://m2nxt.in/iris/public/';
    // _file_upload: string = 'https://m2nxt.in/Masters/public/';


    //...........................Test server hosting..................................//

    // _url_api_alert: string = "http://192.168.1.8/m2nxt-a8/alert/public/";
    // _gallery: string = "http://192.168.1.8/m2nxt-a8/apigallery";
    // _url_api: string = 'http://192.168.1.8/m2nxt-a8:5000/';
    // _php_dashboard_api: string = 'http://192.168.1.8/m2nxt-a8/db/machineDashboard/';
    // _php_dashboard_api1: string = 'http://192.168.1.8/m2nxt-a8/phpFiles/';
    // _download_path: string = 'http://192.168.1.8/m2nxt-a8/MicroService/';
    // _a8Path: string = 'http://192.168.1.8/m2nxt-a8/iris/public/';
    // _file_upload: string = 'http://192.168.1.8/m2nxt-a8/Masters/public/';

}
