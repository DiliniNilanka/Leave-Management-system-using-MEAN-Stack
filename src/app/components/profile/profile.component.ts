import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  userdata:any;
  name:String;
  user_name:String;
  user_email:String;
  c_l:Number;
  s_l:Number;
  profile:any;
  r_n:String;
  user_leave:any;

  constructor(
    private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.user_name = this.dataService.getName();
    this.user_email = this.dataService.getEmail();
    this.c_l = this.dataService.getC();
    this.s_l = this.dataService.getS();
    this.r_n = this.dataService.getR();

    console.log(this.s_l);

    const uL = {
      r_n:this.dataService.getR()
    };
    this.dataService.UserL(uL).subscribe(res=>{
      this.user_leave = res;
      console.log(res);
    });



    /*const user_data = {
      email:this.dataService.getEmail()
    };

    this.dataService.getUserProfile(user_data).subscribe(res=>{
      this.profile = res;
    });*/
  }

  getPending(){

    console.log("button click");

    const uL = {
      r_n:this.dataService.getR()
    };

    this.dataService.PendingLeave(uL).subscribe(res=>{
      this.user_leave = res;
      console.log(res);
    });
  }

  /*applyLeave(){
    this.router.navigate(['/login']);
  }*/

  /*UserLeave(){
    const uL = {
      r_n:this.dataService.getR()
    };
    this.dataService.UserL(uL).subscribe(res=>{
      this.user_leave = res;
      console.log(res);
    });
  }*/



}
