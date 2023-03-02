import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ctop',
  templateUrl: './ctop.component.html',
  styleUrls: ['./ctop.component.css']
})
export class CtopComponent implements OnInit {
 @Output() childTop : EventEmitter<object> = new EventEmitter<object>();
 @Input()Child: String;
 objData={
  EmpName:'Ritesh',
  EmpId:'18',
  EmpCity:'Kolhapur',
 }
 showdetails= false;
 onButtonevent(){
  this.showdetails=!this.showdetails;
 }

  constructor() { }

  ngOnInit() {

  }
  ChildToP(){
  this.childTop.emit(this.objData);
  }

}
