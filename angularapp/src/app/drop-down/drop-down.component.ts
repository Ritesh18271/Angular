import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  //
  countryList: Array<any> = [
    { name: 'India', cities: ['Maharashtra', 'Assam', 'Rajasthan','Madhya Pradesh','Goa','Uttar Pradesh','Gujarat','Andhra Pradesh'] },
    { name: 'Australia', cities: ['Queensland','Western Australia','Victoria','New South Wales','Tasmania'] },

  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }

  constructor() { }

  ngOnInit() {
  }

}
