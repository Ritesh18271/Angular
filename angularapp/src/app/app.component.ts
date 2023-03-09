import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';
import { MyserviceService } from './services/myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularapp';
  Username:string = "";
  products: {};
  userData:any = [];
  imageUrl:'https://cdn.pixabay.com/photo/2019/07/24/23/09/car-4361321_1280.jpg';
  constructor(private demoService:DemoService, private myservice:MyserviceService){

  }
  ngOnInit(): void {
    this.products = this.myservice.products;

    // this.demoService.getUsers().subscribe(res => {
    //   console.log('user api results', res);
    // }, err => {
    //   console.log(err);
    // })
    this.demoService.getUsers().subscribe(res=>{
      console.log(res);
      this.userData=res;
    })
  }
  Clear(){
    this.Username = null;
  }
  parentToChild:string = "I am coming from parent";
  posts =[
    {
      title: 'Palm Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  test(){
    alert('event raised');
  }
  onParent(val){
console.log('from child to parent',val);

  }
  childToParent(value){
    console.log('child to parent',value);

  }
}



