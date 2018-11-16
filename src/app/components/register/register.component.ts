import { Component, OnInit } from '@angular/core';
import { DataService } from '../../MyService/data.service';
//import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:String;
  name:String;
  email:String;
  password:String;

  constructor(
  	private dataService:DataService,
  	//private flashMessage: FlashMessage
  	private router:Router
  ) { }

  ngOnInit() {
  }

  registerData(){
  	const user = {
  		username:this.username,
  		name:this.name,
  		email:this.email,
  		password:this.password
  	};

  	this.dataService.registerUser(user).subscribe(res=>{

  		this.router.navigate(['/login']);
  		
  	});
  }

}
