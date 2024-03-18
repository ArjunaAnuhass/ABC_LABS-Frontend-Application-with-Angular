import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

// const TOKEN = 'jwt';
// const USER = 'role';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // public saveToken(token :string): void {
  //   window.localStorage.removeItem(TOKEN);
  //   window.localStorage.setItem(TOKEN, token);
  // }

  // public saveUser(user): void {
  //   window.localStorage.removeItem(USER);
  //   window.localStorage.setItem(TOKEN, JSON.stringify(user));
  // }


  public setRoles(role: string) {
    localStorage.setItem('role', (role));
  }

  public getRoles() {
    return localStorage.getItem('role');
  }

  public setToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }



}
