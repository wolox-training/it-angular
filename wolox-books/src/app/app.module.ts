import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './screens/unauth/screens/signup/sign-up.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
