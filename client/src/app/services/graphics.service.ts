import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient,
    private secService: SecurityService) { }


  users: Observable<any>;
  user: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });
  getAllUsers() {
    let rol="1";
    const url_api = "http://localhost:3000/api/users?filter=%7B%22where%22%3A%7B%22rol%22%3A%20%221%22%7D%7D";
    return this.http.get<UserModel[]>(url_api);
    
  }
}
