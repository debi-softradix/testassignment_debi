import { convertPropertyBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private _resultService:ResultService) { }

  ngOnInit(): void {
this._resultService.getData().subscribe(data=>{
 console.log("get api data",data)
  
})

}
}
