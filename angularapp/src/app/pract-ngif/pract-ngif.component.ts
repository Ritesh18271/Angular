import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pract-ngif',
  templateUrl: './pract-ngif.component.html',
  styleUrls: ['./pract-ngif.component.css']
})
export class PractNgifComponent implements OnInit {

  fitness=[
    {
      title:'Weight Loss',
      imgUrl:'https://img.freepik.com/premium-vector/weight-loss-man-before-after-diet-poses-cartoon-funny-characters-white-background-man-weight-loss-muscular-guy-after-lose-weight_93083-1716.jpg?w=2000',
      des: 'This course will help you to lose weight'
    },
    {
      title:'Weight Gain',
      imgUrl:'https://blog.medibuddy.in/content/images/2018/02/weight-gain-centre-main.jpg',
      des: 'This will help you to Gain weight'
    },
    {
      title:'Fitness',
      imgUrl:'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36576966.jpg',
      des: 'This will help you to stay in fitness'
    },
    {
      title:'cardio',
      des: 'This will help you to stay in fitness'
    },
   ]
  
  constructor() { }

  ngOnInit() {
  }

}
