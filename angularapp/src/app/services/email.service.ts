import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  Details = new Subject<any>();
  constructor() { }
}
