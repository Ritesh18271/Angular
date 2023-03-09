import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  arrUser: User[] = [] ;
  // DI pots service
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
      this.arrUser = res;
      console.log('User arr data' , res);
    })
  }

}
