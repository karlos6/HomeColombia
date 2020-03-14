import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InmuebleService } from './inmueble.service';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { SolicitudModel } from '../models/solicitud.model';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  
  constructor(private http: HttpClient,
    private secInmueble : InmuebleService,
    private secService : SecurityService) { }

  solicitudes: Observable<any>;
  solicitud: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });

  getAllSolicitud() {
    const url_api = "http://localhost:3000/api/solicitudes";
    return this.http.get(url_api);
    
  }

  saveSolicitud(solicitud: SolicitudModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes?access_token=${token}`
    return this.http.post<SolicitudModel>(url_api, solicitud, { headers: this.headers })
      .pipe(map(data => data))
  }
}
