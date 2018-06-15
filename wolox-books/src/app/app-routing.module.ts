import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/unauth/screens/signup/sign-up.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'auth',
    component: AuthComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
