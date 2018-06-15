import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL: string = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private ls: LocalStorageService
  ){}

  createUser(user) {
    this.http.post(`${this.ROOT_URL}/users`, user, {observe: 'response'})
    .subscribe(response => {
      if (response.status == 201) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  login(user) {
    return this.http.post(`${this.ROOT_URL}/users/sessions`, {'session': user}, {observe: 'response'});
  }

  logout(){
    this.ls.clearStorage();
    this.router.navigateByUrl('/login');
  }

  logout(){
    this.ls.clearStorage();
    this.router.navigateByUrl('/login');
  }
}
