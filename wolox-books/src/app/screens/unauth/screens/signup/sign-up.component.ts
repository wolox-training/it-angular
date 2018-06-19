import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  form: FormGroup;
  locale: string = 'en';

  constructor(private fb: FormBuilder, private UserService: UserService){
    this.form = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  register(post) {
    post['locale'] = this.locale;
    this.UserService.createUser({'user':{...post, 'password_confirmation': post.password}});
  }
}
