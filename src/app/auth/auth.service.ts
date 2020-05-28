import { Injectable } from '@angular/core';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import { LoginPayload } from './login-payload';
import { JwtTokenResponse } from './jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='http://localhost:8080/api/auth/';
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }

  register(registerPayload:RegisterPayload):Observable<any>{
    return this.httpClient.post(this.url+'signup',registerPayload);
  }

  login(loginPayload:LoginPayload):Observable<boolean> {
    return this.httpClient.post<JwtTokenResponse>(this.url+ 'login' ,loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken',data.authenticationToken);
      this.localStorageService.store('username',data.username);
      return true;
    }));
  }
}
 