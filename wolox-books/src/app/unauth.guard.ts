import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(
    private UserService: UserService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.UserService.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('books');
      return false;
    }
  }
}
