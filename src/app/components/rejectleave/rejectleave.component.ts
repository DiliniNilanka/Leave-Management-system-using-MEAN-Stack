import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejectleave',
  templateUrl: './rejectleave.component.html',
  styleUrls: ['./rejectleave.component.css']
})
export class RejectleaveComponent implements OnInit {

  leave:any;

  constructor(
  	private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit() {
  	this.dataService.leavereject().subscribe(res=>{

  		this.leave = res;
      console.log(this.leave);
  		
  	});
  }

}
