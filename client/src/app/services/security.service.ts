import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: String = "http://localhost:3000/api/Users/";
  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }

  verifyUserInSession() {
    let session = localStorage.getItem("activeUser");
    if (session != undefined) {
      this.userInfo.next(JSON.parse(session));
    }
  }

  getUserInfo() {
    return this.userInfo.asObservable();
  }


  loginUser(username: String, pass: String): Observable<UserModel> {
      return this.http.post<UserModel>(`${this.url}login?include=user`, {
        email: username,
        password: pass
      }, {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }, )
  }


  logoutUser() {
    localStorage.removeItem("activeUser");
    this.userInfo.next(new UserModel());
  }
  saveLoginInfo(user: UserModel) {
    user.isLogged = true;
    this.userInfo.next(user);

    localStorage.setItem("activeUser", JSON.stringify(user));
  }

  isActiveSession() {
    return this.userInfo.getValue().isLogged;
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }


  getToken() {
    return localStorage.getItem('accessToken');
  }

}
