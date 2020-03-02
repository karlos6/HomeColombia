import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private secService: SecurityService, private router: Router) { }

  ngOnInit() {
    this.secService.logoutUser();
    mensajeModalGenerico("Ha cerrado sesion correctamente")
    this.router.navigate(['/home']);

    }

}
