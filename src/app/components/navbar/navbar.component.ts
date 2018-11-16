import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../MyService/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private router:Router,
  	private dataService:DataService
  ) { }

  ngOnInit() {
  }

  logoutUser(){

  	this.dataService.logout();
  	this.router.navigate(['/login']);
  	return false;

  }

}
