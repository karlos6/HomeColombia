import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }



  getToken(){
    return localStorage.getItem('accessToken');
  }

}
