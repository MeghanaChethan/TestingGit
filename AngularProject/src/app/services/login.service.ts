import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers: any;
  private _getUrl: ConfigService;
  _a8_path: string = '';
  currentUser: any;
  token: any;

  constructor(private httpClient: HttpClient, private _http: Http) { 
    this._getUrl = new ConfigService(this._http);
    this._a8_path = this._getUrl._a8Path;
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*')
  }

  currentUserData: object;
  public login(param): Observable<any> {
    let headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/text');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<any>(this._a8_path + "userLogin", param,
      {
        headers: headers1,
      }
    ).pipe(map(response => {
      let result = response;
      this.currentUserData = response.data['token'];

      if (this.currentUserData) {
        sessionStorage.setItem('user_data', JSON.stringify(result));
        this.currentUser = sessionStorage.getItem('user_data');
        let token = sessionStorage.getItem('user_data');
        let sessionData = JSON.parse((sessionStorage.getItem('user_data')))
        this.token = sessionData.data.token;
        this.currentUser = token;
        this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
      }
      return result;
    }));
  }
   

  logOut(): Observable<any> {
    let sessionData = JSON.parse((sessionStorage.getItem('user_data')));
    let sessionId = sessionData.data.sessionId;
    this.token = sessionData.data.token;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    this.currentUserData = [];

    return this.httpClient.get(this._a8_path + 'userLogout/' + sessionId, { headers: this.headers })
      .pipe(map(response => {
        let result = response;
        return result;
      }));
  }


 loadCustomerData(customer_code): Observable<any> {
    return this.httpClient.get(this._a8_path + 'customers/getCustomerLogo/' + customer_code)
      .pipe(map(response => {
        let result = response;
        return result;
      }));

  }


check_pwd_duration(customer_key, username) {
    return this.httpClient.post(this._a8_path + "passwordduration/" + customer_key + '/' + username,
      {
        headers: this.headers,
      }
    ).pipe(map(response => {
      let result = response;
      return result;
    }));
  }
  setCustomer(customer_key) {
    let sessionData = JSON.parse((sessionStorage.getItem('user_data')))
    this.token = sessionData.data.token;
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    let param = {
      "cur_customer_key": customer_key
    }
    return this.httpClient.post(this._a8_path + 'plants/cur_customer', param,
      {
        headers: this.headers,
      }
    ).pipe(map(response => {
      let result = response;
      return result;
    }));
  }

  change_password(param): Observable<any> {
    
    return this.httpClient.post(this._a8_path + "updatepassword", param,
      {
        headers: this.headers,
      }
    ).pipe(map(response => {
      let result = response;
      return result;
    }));

  }
  change_password_left_sidebar(param): Observable<any> {
    let sessionData = JSON.parse((sessionStorage.getItem('user_data')))
    this.token = sessionData.data.token;
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.httpClient.post(this._a8_path + "users/updatepass", param,
      {
        headers: this.headers,
      }
    ).pipe(map(response => {
      let result = response;
      return result;
    }));

  }

  getCurrentUser() {
    let token = sessionStorage.getItem('user_data');

    let json_parse = JSON.parse(token);
    return json_parse.data.user_data;
  }


  isLoggedIn() {
    let token = sessionStorage.getItem('user_data');
    let json_parse = JSON.parse(token);
    if (json_parse == null) {
      return false;
    }
    if (!token) {
      return false;
    } else {
      if (json_parse.data.token == '' || json_parse.data.token == null) {
        return false;
      } else {
        return true;
      }
    }
  }
  setTimeZone(param):Observable<any> {
    return this.httpClient.post(this._a8_path + 'plants/cur_plantTimezone', param, { headers: this.headers })
      .pipe(map(response => {
        let result = response;
        return result;
      }));
  }
}
