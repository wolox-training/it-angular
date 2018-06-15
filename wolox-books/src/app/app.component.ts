import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form: FormGroup;
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  locale: string = 'en';

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  register(post) {
    console.log(JSON.stringify({'user': {...post, locale: this.locale }}));
  }
}
