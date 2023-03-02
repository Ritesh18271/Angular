import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-directive',
  templateUrl: './assign-directive.component.html',
  styleUrls: ['./assign-directive.component.css']
})
export class AssignDirectiveComponent implements OnInit {
  password:string = "Secret Paswword = RI18@02!";
  isShow=false;
  countArray=[];
  limit=5;
  toggleDisplayDetails(){
   const Quote ='Before Quit remember why you start !'
    this.isShow=!this.isShow;
    this.countArray.push(Quote)
  };
  changeColor(ApplyColor){
    if (ApplyColor>=this.limit) {
      return 'blue';
    }else{
      return 'white'
    }
  };



  constructor() { }

  ngOnInit() {
  }

}
