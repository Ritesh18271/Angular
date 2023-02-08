import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularapp';
  Username:string = "";
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



