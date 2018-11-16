import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
//import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leave: any;
  user_email:String;
  email:String;
  name:String;
  reg_no:String;
  c_l_o:Number;
  c_l:Number;
  s_l_o:Number;
  s_l:Number;
  ltypeU:String;
  days:Number;

  constructor(
  	private dataService:DataService,
  	//private flashMessage: FlashMessage
  	private router:Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    const user = {
      emai:this.dataService.getEmail(),
      name:this.dataService.getName()
    };
  	this.dataService.viewPending(user).subscribe(res=>{

    console.log(res);

    this.leave = res;
      
    });
  }
  onClickMe(l){
    this.c_l_o=l.available_casual;
    this.s_l_o=l.available_sick;
    this.ltypeU=l.ltype;
    this.days = l.days;
    console.log(this.days);
    if(this.ltypeU == "sick"){
      this.s_l = this.s_l_o - this.days;
      console.log(this.s_l);
    }
    if(this.ltypeU == "casual"){
      this.c_l = this.c_l_o - this.days;
      console.log(this.c_l);
    }
    const updateL = {
      id:l._id,
      ltype:l.ltype,
      reg_no:l.reg_no,
      c_l:this.c_l,
      s_l:this.s_l
    };
    console.log(updateL);
    this.dataService.LeaveApprove(updateL).subscribe(res=>{
      this.router.navigate(['/leaveapprove']);
    });
  }

  forReject(l){
    const rejectL = {
      id:l._id
    };
    this.dataService.LeaveReject(rejectL).subscribe(res=>{
      this.router.navigate(['/leavereject'])
    });
  }
  Approve(){
    this.router.navigate(['/leaveapprove']);
  }
  Reject(){
    this.router.navigate(['/leavereject']);
  }
  Add(){
    this.router.navigate(['/register']);
  }
  

}
