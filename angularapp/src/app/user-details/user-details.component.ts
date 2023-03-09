import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.userService.getUserById(id).subscribe( res => {
      console.log('get User by ID', res);
    })

  }
}
