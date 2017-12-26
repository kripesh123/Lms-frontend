import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:8888/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CustomerService {

  constructor(private http : Http) { }

  getCustomer(){
    let url = BASE_URL + "customer/all";
    return this.http.get(url,HEADER)
    .map(res => res.json());
  }

}
