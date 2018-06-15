import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/unauth/screens/signup/sign-up.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'books',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
