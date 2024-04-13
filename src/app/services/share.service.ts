import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Iall{
  "error": boolean,
  "msg": string,
  "data":[]
}
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http:HttpClient) { }
  getCountries(){
    //debugger;
    //https://restcountries.eu/rest/v2/all
    return this.http.get<Iall>('https://countriesnow.space/api/v0.1/countries')
  }
  getCountry(){
  let heders=new HttpHeaders().set("X-CSCAPI-KEY","API_KEY")
    return this.http.get('https://api.countrystatecity.in/v1/countries',{
      headers : heders
    })
  }
}
