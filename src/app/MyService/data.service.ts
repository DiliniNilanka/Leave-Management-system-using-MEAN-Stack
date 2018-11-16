import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:any;

  authtoken:any;
  //user:any;

  leave:any;
  userdetail:any;
  logName:String;
  email:String;
  user_email:String;
  user_reg:String;
  casual:Number;
  sick:Number;
  r_n:String;

  constructor(private http:Http) { }


  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));

  }

  NewL(l){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/newleave",l,{headers:headers}).pipe(map(res=>res.json()));

  }

  getUserProfile(user_data){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/getprofile",user_data,{headers:headers}).pipe(map(res=>res.json()));
  }


  loginUser(user){

  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()));

  }

  serchLeaveByDate(details){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/searchleave",details,{headers:headers}).pipe(map(res=>res.json()));
  }

  UserL(uL){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/userleave",uL,{headers:headers}).pipe(map(res=>res.json()));
  }

  PendingLeave(uL){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/userpendingleave",uL,{headers:headers}).pipe(map(res=>res.json()));
  }

  

  fetchToken(){
  	const token = localStorage.getItem("tokenid");
  	this.authtoken = token;
  }

  storeData(token,userdata){

  	localStorage.setItem("tokenid",token);
  	localStorage.setItem("user",JSON.stringify(userdata));

  	this.authtoken = token;
  	this.user = userdata;

  }

  getUser(){
    const detail = localStorage.getItem("user");
    this.userdetail = detail;
    return this.userdetail;
  }

  logout(){
  	this.authtoken = null;
  	this.user = null;
  	localStorage.clear();
  }

  viewPending(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/home",user,{headers:headers}).pipe(map(res=>res.json()));
  }

  display(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/home",{headers:headers}).pipe(map(res=>res.json()));

  }

  approveleave(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/leaveapprove",{headers:headers}).pipe(map(res=>res.json()));
  }

  leavereject(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/leavereject",{headers:headers}).pipe(map(res=>res.json()));
  }

  sendName(name){
    this.logName = name;
  }

  getName(){
    return this.logName;
  }

  sendEmail(email){
    this.email = email;
  }

  getEmail(){
    return this.email;
  }

  sendReg(reg){
    this.user_reg = reg;
  }

  getReg(){
    return this.user_reg;
  }

  sendC(c_l){
    this.casual=c_l;
  }

  getC(){
    return this.casual;
  }

  sendS(s_l){
    this.sick=s_l;
  }

  getS(){
    return this.sick;
  }

  sendR(r){
    this.r_n=r;
  }

  getR(){
    return this.r_n;
  }

  LeaveApprove(updateL){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.put("http://localhost:3000/user/approvL",updateL,{headers:headers}).pipe(map(res=>res.json()));
  }

  LeaveReject(rejectL){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.put("http://localhost:3000/user/rejectL",rejectL,{headers:headers}).pipe(map(res=>res.json()));
  }

  /*UpdateApprove(updateT){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.put("http://localhost:3000/user/updatetype",updateT,{headers:headers}).pipe(map(res=>res.json()));
  }*/

}




