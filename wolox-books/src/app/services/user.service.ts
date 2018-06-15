import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL: string;

  constructor(private http: HttpClient, private router: Router) {
    this.ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  }

  createUser(user) {
    this.http.post(this.ROOT_URL, user, {observe: 'response'})
    .subscribe(response => {
      if (response.status == 201) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  login(user) {
    let response = this.http.post(this.ROOT_URL+'/session', {user});
  }
}
