import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assign',
  templateUrl: './reactive-assign.component.html',
  styleUrls: ['./reactive-assign.component.css']
})
export class ReactiveAssignComponent implements OnInit {
  form: FormGroup;
  isSubmitted=false;

constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subscription: new FormControl('Advanced', Validators.required),
      password: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required, this.futureDateValidator]),
    });
  }
futureDateValidator(control: FormControl) {
    const selectedDate = new Date(control.value);
    const now = new Date();
    return selectedDate > now ? null : { futureDate: true };
  }

  onSubmit() {
    this.isSubmitted=true;
    if (this.form.valid) {
      console.log(this.form.value);
    }  else {
      this.form.markAllAsTouched();
      console.warn('Invalid form');
    }

    console.log(this.form.value);
  }
  ngOnInit() {
  }

}
