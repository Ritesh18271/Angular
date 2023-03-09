import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  // DI
  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
  return this.http.get<User>(this.url);
  }
  getUserById(id: number) {
   return this.http.get(this.url+ '/'+ id);
  }
}
