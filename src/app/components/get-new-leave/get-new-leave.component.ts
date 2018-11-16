import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
//import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-new-leave',
  templateUrl: './get-new-leave.component.html',
  styleUrls: ['./get-new-leave.component.css']
})
export class GetNewLeaveComponent implements OnInit {
  email:Date;
  lstart:Date;
  lend:String;
  ltype:String;
  comment:String;
  available_casual:Number;
  available_sick:Number;
  reg_no:String;
  days:Number;
  

  constructor(
  	private dataService:DataService,
  	//private flashMessage: FlashMessage
  	private router:Router
  ) { }

  ngOnInit() {
  }

  getLeaveData(){
    const l = {
      reg_no:this.dataService.getR(),
      email:this.dataService.getName(),
      lstart:this.lstart,
      lend:this.lend,
      ltype:this.ltype,
      comment:this.comment,
      available_casual:this.dataService.getC(),
      available_sick:this.dataService.getS(),
      days:this.days
    };
    this.dataService.NewL(l).subscribe(res=>{

      this.router.navigate(['/myprofile']);
      
    });
  }

}
