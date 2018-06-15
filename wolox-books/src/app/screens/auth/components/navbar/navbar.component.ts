import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'auth-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AuthNavbarComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.user.logout();
  }
}
