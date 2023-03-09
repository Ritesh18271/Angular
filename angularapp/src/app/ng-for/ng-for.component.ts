import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';


@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  title: string = 'Top 3 Bollywood movies';
  movies: Movies[]=[
    {title: '3 Idiots', director: 'Rajkumar Hirani',cast:'Amir',releaseDate:'2013'},
    {title: 'Tumbad', director: 'Rahil',cast:'Rahi',releaseDate:'2020'},
    {title: 'Kantara', director: 'Rishabh shetty',cast:'Rishabh shetty',releaseDate:'2022'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
