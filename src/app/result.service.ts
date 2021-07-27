import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http:HttpClient ) { }
  
  getData(){
    let url="https://jsonplaceholder.typicode.com/posts";
    return this._http.get(url);
  }
  _url = 'https://jsonplaceholder.typicode.com/posts';
  register(userData:any){
     return this._http.post<any>(this._url,userData);

}

}
