import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { LoginUserModel } from 'src/app/models/loginUser.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: LoginUserModel;
  userLogged: boolean = false;
  userName: String;
  rol: String;

  subscription: Subscription

  constructor(private secService: SecurityService) { }

  ngOnInit() {

    this.verifyUserSession();


  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
      this.updateInfo();
    });
  }

  updateInfo() {
    if (this.userInfo.user != undefined && this.userInfo.user != null) {
      this.rol = this.userInfo.user.rol;
    }
    this.userLogged = this.userInfo.isLogged;
    if (this.userLogged) {
      this.userName = `${this.userInfo.user.username}`;
    }

  }

}
