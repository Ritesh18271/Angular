import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
@Output()fromChild : EventEmitter<string> = new EventEmitter<string>();
  @Input() child : String;
  lastName:string = 'Kamble';
  constructor() { }

  ngOnInit() {
  console.log(this.child);

  }
  sendToParent(){
    this.fromChild.emit(this.lastName)
  }
}
