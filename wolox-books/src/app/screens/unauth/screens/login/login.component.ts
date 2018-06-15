import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {
    this.form = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit() {
  }

  login(post) {
    this.UserService.login(post);
  }

  goToSignUp() {
    this.router.navigateByUrl('/sign-up');
  }

}
