import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../datatypes/user';
import { MyAppUrl } from '../environments/environment'; 

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url: string = MyAppUrl
  headers: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  createUser(user: User) {
    this.http.post(`${this.url}`, user, this.options).subscribe(data => {
      console.log(data)
    })

  }

}
