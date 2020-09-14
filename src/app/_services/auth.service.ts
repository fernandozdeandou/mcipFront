import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/mcip/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles;
  isBoss;

  constructor( private http:HttpClient,
               private tokenStorageService:TokenStorageService) { }

  login(credentials): Observable<any> {
      return this.http.post(AUTH_API + 'signin', {
        username: credentials.username,
        password: credentials.password
      }, httpOptions);
    }
  
    register(user): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        username: user.username,
        email: user.email,
        password: user.password
      }, httpOptions);
    }
    isChef():boolean{
      const users = this.tokenStorageService.getUser();
      this.roles = users.roles;
      if(this.roles.includes('ROLE_CHEF')){
        return true;
      }else return false;
    }
    isUser():boolean{
      const users = this.tokenStorageService.getUser();
      this.roles = users.roles;
      if(this.roles.includes('ROLE_USER')){
        return true;
      }else return false;
    }
    isAdmin():boolean{
      const users = this.tokenStorageService.getUser();
      this.roles = users.roles;
      if(this.roles.includes('ROLE_ADMIN')){
        return true;
      }else return false;
    }
    isSecretaire():boolean{
      const users = this.tokenStorageService.getUser();
      this.roles = users.roles;
      if(this.roles.includes('ROLE_SMCIP')){
        return true;
      }else return false;
    }
}
