import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) {
    this.getAllProducts().subscribe(data => {
      console.log(data);
    });
  }

  public getAllProducts(): Observable<any> {
    return this.http.get("../src/assets/phones/phones.json");
  }
}