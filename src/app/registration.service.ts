import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class RegistrationService {
  
  constructor(private _http:HttpClient ,) { }
  _url = 'https://jsonplaceholder.typicode.com/posts';
  register(userData:any){
     return this._http.post<any>(this._url,userData);
     
  }
  
  // getData(){
  //   let url="https://localhost:3000/users/:id";
  //   return this._http.get(url);
  // }

}
