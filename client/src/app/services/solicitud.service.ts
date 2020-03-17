import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InmuebleService } from './inmueble.service';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { SolicitudModel } from '../models/solicitud.model';


import { map } from 'rxjs/operators';
import { CodeudorModel } from '../models/codeudor.model';

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

  getSolicitudsxCliente(clientId: string){
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes?filter=%7B%22where%22%20%3A%20%7B%22ClientId%22%20%3A%20%7B%20%22like%22%20%3A%20%22${clientId}%22%7D%7D%7D&access_token=${token}`
    return this.solicitud = this.http.get(url_api);
  }

  getSolicitudsxUser(userId: string){
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes?filter=%7B%22where%22%20%3A%20%7B%22UserId%22%20%3A%20%7B%20%22like%22%20%3A%20%22${userId}%22%7D%7D%7D&access_token=${token}`
    return this.solicitud = this.http.get(url_api);
  }

  saveSolicitud(solicitud: SolicitudModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes?access_token=${token}`
    return this.http.post<SolicitudModel>(url_api, solicitud, { headers: this.headers })
      .pipe(map(data => data))
  }

  deleteSolicitud(id: String) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes/${id}?access_token=${token}`
    return this.http.delete<SolicitudModel>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }

  
  getSolicitudById(id: string) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes/${id}?access_token=${token}`
    return this.solicitud = this.http.get(url_api);
  }

  updateSolicitud(solicitud){
    const soldId =  solicitud.id;
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes/${soldId}/?access_token=${token}`
    return this.http.put<SolicitudModel>(url_api, solicitud, {headers : this.headers})
    .pipe(map(data => data));
  }
  
  getSolicitudsxEstado(){
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/solicitudes?filter=%7B%22where%22%3A%7B%20%22Estado%22%3A%20%22enviado%22%7D%7D&access_token=${token}`
    return this.solicitud = this.http.get(url_api);
  }

  //SaveCodeudor
  saveCodeudor(codeudor: CodeudorModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/codeudores?access_token=${token}`
    return this.http.post<CodeudorModel>(url_api, codeudor, { headers: this.headers })
      .pipe(map(data => data))
  }

    // METODO QUE GUARDA LA CARTA LABORAL EN EL LOOPBACK
    loadDocumento(formData: FormData) {

      this.http.post("http://localhost:3000/api/containers/Documentos/upload", formData)
        .subscribe((response) => {
          console.log('response received is ', response);
        })
    }
}
