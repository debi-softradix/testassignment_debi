import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url ='http://localhost:3000/users/';


  constructor(private _http:HttpClient ,) { }
  register(userData:any){
     return this._http.post<any>(this._url,userData);
     
  }
  
  // getData(){
  //   let url="https://localhost:3000/users/:id";
  //   return this._http.get(url);
  // }
}
