import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { DataService } from '../../MyService/data.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-leaveapprove',
  templateUrl: './leaveapprove.component.html',
  styleUrls: ['./leaveapprove.component.css']
})
export class LeaveapproveComponent implements OnInit {

  leave:any;
  search:any;
  date:String;

  constructor(
    private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit() {
  	this.dataService.approveleave().subscribe(res=>{

  		this.leave = res;
      console.log(this.leave);
  		
  	});


  }

  @ViewChild('content') content:ElementRef;

  downlodPDF(){
      
      let doc = new jsPDF();
      let speacialElementHandlers = {
        '#editor': function(element,renderer){
          return true;
        }
      };
      let content = this.content.nativeElement;
      doc.fromHTML(content.innerHTML,15,15,{
        'border':10,
        'width':190,
        'title':"Approved Leave Summary",
        'elementHandlers':speacialElementHandlers
      });
      doc.save('Test.pdf');
  }

  SearchLeave(){
    console.log("Button click");
    const details = {
      date:this.date
    };
    console.log(details);

    this.dataService.serchLeaveByDate(details).subscribe(res=>{
      console.log(res);
      this.leave = res;
    });
  }

  goBack(){
    this.dataService.approveleave().subscribe(res=>{

      this.leave = res;
      console.log(this.leave);
      
    });
  }


}
