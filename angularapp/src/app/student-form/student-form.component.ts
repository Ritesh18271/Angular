import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  minAge = 17;
  maxAge = 20;
  formData={
    email :'',
    password: '',
    course: '',
    gender: ''
  }
  showPassword = false;
  showPassword2=false;
  toggleShowPassword(){
    this.showPassword = !this.showPassword;

  }
  toggleShowPassword2() {
    this.showPassword2 = !this.showPassword2;
  }
  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails='';
  isSubmitted:boolean= false;
  constructor() { }

  ngOnInit() {
  }


  login(form: NgForm) {
    this.isSubmitted = true,
console.log(form);
this.formData.email=form.value.email;
this.formData.password=form.value.password;
this.formData.course=form.value.course;
this.formData.gender=form.value.gender;
// form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');
  }
}
