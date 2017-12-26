import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:8888/';
const API_VER = 'api/v1/'
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class LoginService {
  token : string;

  constructor(private http : Http) { }

  sendCredential(model: any){
    let tokenUrl1 = BASE_URL + API_VER + "user/login";
    return this.http.post(tokenUrl1, JSON.stringify(model),HEADER);
  }

  sendToken(token : any){
    let tokenUrl2 = BASE_URL + "admin/test";
    let getHeaders = new Headers({'Authorization':'Bearer '+token});
    return this.http.get(tokenUrl2,{headers: getHeaders})
    .map(res=> res.json());
  }

  logout(){
    localStorage.setItem("token",'');
    localStorage.setItem("currentUserName",'');
    alert("You just logged out. ");
  }

  checkLogin(){
    if(localStorage.getItem("currentUserName")!=null && localStorage.getItem("currentUserName")!='' 
      && localStorage.getItem("token")!=null && localStorage.getItem("token")!='' ){
      return true;
    }else{
      return false;
    }
  }


}
