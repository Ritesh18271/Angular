import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I saw this tree'
    },
    {
      title: 'Bambu Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I saw this tree'
    },
    {
      title: 'Mango Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I saw this tree'
    },
    {
      title: 'Pam Tree',
      content: 'I saw this tree'
    }
  ]

  showme: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
