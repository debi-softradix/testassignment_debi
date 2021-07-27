import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service'
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  detail: any;
  updatedBody:any;
  userId:any;
  constructor(private _resultService: ResultService, private _http: HttpClient ) {
    this.dataShow();
    this.userData();
    this.updateData();
    
   }

  ngOnInit(): void {
  }
  
  dataShow() {
    this._resultService.getData().subscribe(data => {
      this.detail = data;
      console.log("get api data", data)
    })
  }
  userData(){}
  _url = 'https://jsonplaceholder.typicode.com/posts';
  register(userData:any){
     return this._http.post<any>(this._url,userData); 
  } 
   updateData(){
     const URL ='https://jsonplaceholder.typicode.com/posts'
     return this._http.put(URL,this.userId.push(this.userId));
   }
  }

