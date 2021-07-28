import { Component, OnInit } from '@angular/core';
import { ResultserviceService} from '../resultservice.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  constructor( private resultService:ResultserviceService) {

    this.resultService.getUsers().subscribe(
      data => {
        console.log('success!',data)
      }
    )
  }

  ngOnInit() {
    
  }

}

