import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl = 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1096617/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png';
  constructor() { }

  ngOnInit() {
  }

}
