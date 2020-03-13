import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { LoginUserModel } from '../models/loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor(private http: HttpClient,
    private secService: SecurityService) { }


  users: Observable<any>;
  user: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });

  getAllUsers() {
    
    const url_api = "http://localhost:3000/api/users";
    return this.http.get(url_api);
    
  }



  saveUser(user: UserModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/users?access_token=${token}`
    return this.http.post<UserModel>(url_api, user, { headers: this.headers })
      .pipe(map(data => data))
  }

  deleteUser(id: String) {
    //TODO: Obtener token
    //TODO: not null
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/users/${id}/?access_token=${token}`
    return this.http.delete<UserModel>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }

  
  getUserById(id: string) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/users/${id}?access_token=${token}`
    return this.user = this.http.get(url_api);
  }

  updateUser(user:UserModel){
    const UserId =  user.id;
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/users/${UserId}/?access_token=${token}`
    return this.http.put<UserModel>(url_api, user, {headers : this.headers})
    .pipe(map(data => data));
  }
}
