import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { FlashMessageModule } from 'angular-flash-message';
import { AlertsModule } from 'angular-alert-module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './MyService/data.service';
import { ProfileComponent } from './components/profile/profile.component';
import { GetleaveComponent } from './components/getleave/getleave.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveapproveComponent } from './components/leaveapprove/leaveapprove.component';
import { GetNewLeaveComponent } from './components/get-new-leave/get-new-leave.component';
import { ApprovedRejectedLeaveComponent } from './approved-rejected-leave/approved-rejected-leave.component';
import { RejectleaveComponent } from './components/rejectleave/rejectleave.component';

const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'myprofile',component:ProfileComponent},
  {path:'getleave',component:GetleaveComponent},
  {path:'home',component:HomeComponent},
  {path:'newl',component:GetNewLeaveComponent},
  {path:'leaveapprove',component:LeaveapproveComponent},
  {path:'approverejectLeave',component:ApprovedRejectedLeaveComponent},
  {path:'leavereject',component:RejectleaveComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GetleaveComponent,
    HomeComponent,
    LeaveapproveComponent,
    GetNewLeaveComponent,
    ApprovedRejectedLeaveComponent,
    RejectleaveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes),
    //FlashMessageModule
    AlertsModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
