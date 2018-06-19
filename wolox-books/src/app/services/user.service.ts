import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL: string = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  createUser(user) {
    this.http.post(this.ROOT_URL, user, {observe: 'response'})
    .subscribe(response => {
      if (response.status == 201) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  login(user) {
    this.http.post(this.ROOT_URL+'/sessions', {'session': user})
    .subscribe(res => {
      console.log(res['access_token']);
    });
  }
}
