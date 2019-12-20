import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  constructor() { }

  login(userName: string, password: string): boolean {
    if (userName === 'Admin' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (userName === 'User' && password === 'User') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
