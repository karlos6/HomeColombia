import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class RolRequiredAdviserGuard implements CanActivate {
  constructor(private secService: SecurityService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.secService.userRol()=="1" || this.secService.userRol()=="0"  ){
       
        return true;
      }else{
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
