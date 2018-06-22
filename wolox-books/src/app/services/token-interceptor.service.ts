import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private storageService: LocalStorageService) { }

  intercept(req, next){
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.storageService.getValue(this.storageService.SESSION_TOKEN)}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
