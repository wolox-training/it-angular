import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  }

  createUser(user) {
    this.http.post(this.ROOT_URL, user, {observe: 'response'})
    .subscribe(response => {
      if (response.status == 201) {
        console.log('success');
      }
    });
  }
}
