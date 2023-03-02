import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title='Bodybuiding';
  @Input() content= 'You have to follow strict regime';
  constructor() { }

  ngOnInit() {
  }

}
