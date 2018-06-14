import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
  form: FormGroup;
  post: any[];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  locale: string = 'en';

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  register(post) {
    post['locale'] = this.locale;
    console.log(JSON.stringify({'user':post}));
  }
}
