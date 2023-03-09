import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  Details;
  userName;
  constructor(private _utilityService:UtilityService, private _emailService:EmailService) {
      this._utilityService.userName.subscribe(res => {
        console.log(`data coming from subject`,res);

        this.userName = res;
        this._emailService.Details.subscribe(res1 => {
          console.log(`comp1`,res1);

          this.Details = res1;

        })

      });


   }

  ngOnInit() {
  }
  updateUserName(uname,email)
  {
    this.userName = uname.value;
     console.log(uname.value);

     this._utilityService.userName.next(uname.value);

     this.Details = email.value;
     console.log(email.value);

    this._emailService.Details.next(email.value);
  }
}
