import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
//import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-approved-rejected-leave',
  templateUrl: './approved-rejected-leave.component.html',
  styleUrls: ['./approved-rejected-leave.component.css']
})
export class ApprovedRejectedLeaveComponent implements OnInit {
  leave:any;

  constructor(
  	private dataService:DataService,
  	//private flashMessage: FlashMessage
  	private router:Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
  }

}

