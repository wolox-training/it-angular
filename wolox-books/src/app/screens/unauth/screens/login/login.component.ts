import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router,
    private ls: LocalStorageService
  ){
    this.form = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit() {
  }

  login() {
    this.UserService.login(this.form.value)
    .subscribe(response => {
      if(response.status == 200) {
        this.ls.setValue(this.ls.SESSION_TOKEN, response.body['access_token']);
        this.router.navigateByUrl('/books');
      }
    });
  }
}
