import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form: FormGroup;
  locale: string = 'en';

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  register() {
    console.log(JSON.stringify({'user': {...this.form.value, locale: this.locale }}));
  }
}
