import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginUserModel } from '../models/loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: String = "http://localhost:3000/api/Users/";
  userInfo = new BehaviorSubject<LoginUserModel>(new LoginUserModel());

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }

   headers: HttpHeaders = new HttpHeaders({"content-type": "application/json"});

   verifyUserInSession(){
     let session = localStorage.getItem("activeUser");
     if( session != undefined){
       this.userInfo.next(JSON.parse(session));
     }
   }

  getUserInfo() {
    return this.userInfo.asObservable();
  }

  loginUser(username: String, pass: String): Observable<LoginUserModel>{
  
    return this.http.post<LoginUserModel>(`${this.url}login?include=user`, {
      email: username,
      password: pass
    }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })
  }
  
  logoutUser() {
    localStorage.removeItem("activeUser");
    localStorage.removeItem("accessToken")
    this.userInfo.next(new LoginUserModel());
  }

  saveLoginInfo(user: LoginUserModel) {
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

  registerUser(user: UserModel):Observable<UserModel>{

    console.log(user)

    const url_api = "http://localhost:3000/api/Users"

    return this.http.post<UserModel>(url_api,user,{headers: this.headers}).
    pipe(map(data => data))

  }

}
