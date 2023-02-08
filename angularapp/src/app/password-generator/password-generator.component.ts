import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {
  password = '';
  includesLetter = false;
  includesNumber = false;
  includesSymbol = false;
  inputLength = 0;
  onChangeUseLetters(){
    this.includesLetter =!this.includesLetter;
    console.log(`includesLetter:`,this.includesLetter);
  }
   onChangeUseNumbers(){
    this.includesNumber =!this.includesNumber;
    console.log(`includesNumber:`,this.includesNumber);
  }
  onChangeUseSymbols(){
    this.includesSymbol =!this.includesSymbol;
    console.log(`includesSymbol:`,this.includesSymbol);
  }
  numberLength(value:string){
    let parsedValue =parseInt(value);
    if (!isNaN (parsedValue)) {
       this.inputLength= parsedValue;
       console.log(this.inputLength);
    }
  }
  generatePassword(){
    const letter ='abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const symbol = '!@#$%^&*()';
    let generatePassword = '';
    let validCharacters ='';
    if (this.includesLetter) {
      validCharacters+=letter;
    }
    if (this.includesNumber) {
      validCharacters+=number;
    }
    if (this.includesSymbol) {
      validCharacters+=symbol;
    }
    for (let i = 0; i <this.inputLength; i++) {
     const index = Math.floor(Math.random()*validCharacters.length)
       generatePassword+=validCharacters[index];
    }
    this.password = generatePassword;
  }


  ngOnInit() {
  }

}
