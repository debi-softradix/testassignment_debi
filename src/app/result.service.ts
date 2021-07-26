import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http:HttpClient ) { }
  
  getData(){
    let url="https://localhost:3000/users/:id";
    return this._http.get(url);
  }
}
