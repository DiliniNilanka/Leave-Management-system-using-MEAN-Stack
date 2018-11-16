import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-getleave',
  templateUrl: './getleave.component.html',
  styleUrls: ['./getleave.component.css']
})
export class GetleaveComponent implements OnInit {
  userid:String;
  name:String;
  leavestart:Date;
  leaveend:Date;
  leavetype:any;
  user_name:String;
  user_email:String;
  comment:any;
  constructor(
  	private dataService:DataService,
  	private router:Router,
  	private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.user_name = this.dataService.getName();
    this.user_email = this.dataService.getEmail();
  }

  leaveData(){
  	const leave = {
  		userid:this.user_email,
  		name:this.user_name,
  		leavestart:this.leavestart,
  		leaveend:this.leaveend,
  		leavetype:this.leavetype,
  		comment:this.comment
  	};
  	
  }

}
