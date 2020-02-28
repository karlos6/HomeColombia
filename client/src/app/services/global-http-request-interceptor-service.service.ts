import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
declare function mensajeModalGenerico(m): any;

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpRequestInterceptorServiceService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.warn("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      //login
                this.router.navigateByUrl("/security/login");
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/unauthorized");
                break;
              case 422:     //forbidden
                mensajeModalGenerico("el correo o nombre de usuario ya existe")
                console.log("Error 422, el usuario o el email ya existen.");
                break;
              case 404: 
                console.log("Error 404, sigue");
                break;
            }
          }
        } else {
          console.warn("some thing else happened");
        }
        return throwError(error);
      })
    )
  }
}
