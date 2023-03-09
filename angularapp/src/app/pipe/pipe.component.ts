import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  todaysDate = new Date();

  price: number = 70000;
  countLenght: number = 500;
  employee = {
    empid: '1',
    empname: 'Jack'
  }
  constructor() { }

  ngOnInit() {
  }

}
