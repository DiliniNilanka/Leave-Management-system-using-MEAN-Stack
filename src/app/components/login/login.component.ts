import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  n:String;
  e:String;
  u_id:String;
  c_l:Number;
  s_l:Number;
  reg:String;
  user_type:String;

  constructor(
  	private dataService:DataService,
  	private router:Router
  ) { }

  ngOnInit() {
  }

  loginUser(){

  	const user = {
  		email:this.email,
  		password:this.password
  	};

  	this.dataService.loginUser(user).subscribe(res=>{

  		if(res.state){
        //console.log(res.user.email);
        this.n = res.user.name;
        this.e = res.user.email;
        this.u_id = res.user.reg_no;
        this.c_l=res.user.casualleave;
        this.s_l=res.user.sickleave;
        this.reg=res.user.reg_no;
        this.user_type=res.user.user_type;
        console.log(this.user_type);
        console.log(this.s_l);
        this.dataService.sendR(this.reg);
        this.dataService.sendName(this.n);
        this.dataService.sendEmail(this.e);
        this.dataService.sendReg(this.u_id);
        this.dataService.sendC(this.c_l);
        this.dataService.sendS(this.s_l);
  			this.dataService.storeData(res.token,res.user);
        if(this.user_type == "admin"){
          this.router.navigate(['/home']);
        }
        if(this.user_type == "user"){
          this.router.navigate(['/myprofile']);

        }
        
  		}

  	});

  }



}
