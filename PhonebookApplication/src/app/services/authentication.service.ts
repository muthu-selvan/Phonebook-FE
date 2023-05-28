import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const AUTH_USER = 'authenticatedUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public authenticate(userName: string, password: string): boolean {
    if(userName === 'admin' && password === 'admin') {
        sessionStorage.setItem(AUTH_USER,userName);
        return true;
    }
    return false;
  }

  getAuthenticatedUser() {
    return  sessionStorage.getItem(AUTH_USER);
  }

  isUserLoggedIn() {
      let user =  sessionStorage.getItem(AUTH_USER);
      return (user !== null);
  }

  logoutUser(): void {
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
