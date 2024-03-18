import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );


  constructor(
    private http: HttpClient,
    private userStorageService: UserStorageService,
  ) { }

  register(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/v1/authentication/register1", signupRequest);
  }


  public login(loginData: NgForm) {
    return this.http.post(BASIC_URL + "api/v1/authentication/authenticate", loginData, {headers: this.requestHeader});

  // login(username: string, password: string): any {
  //   const body = {username, password};
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   return this.http.post(BASIC_URL + 'api/v1/authentication/authenticate', body, { headers, observe: 'response'}).pipe(

  //     map((res) => {
  //       const token = res.headers.get('authorization').substring(7);
  //       const user = res.body;

  //       if(token && user){
  //         this.userStorageService.saveToken(token);
  //         this.userStorageService.saveUser(user);
  //         return true;
  //       }
  //       return false;
  //     })
  //   )
  // }
}

public roleMatch(allowedRoles: String): any{
  let isMatch = false;
  const userRoles: any = this.userStorageService.getRoles();

  if(userRoles != null && userRoles) {
    for(let i=0; i < userRoles.length; i++) {
      for(let j=0; j < allowedRoles.length; j++) {

        if (userRoles[i] === allowedRoles[j]) {
          isMatch = true;
          return isMatch;
        }
        else {
          return isMatch;
        }
      }
    }
  }

}
}
