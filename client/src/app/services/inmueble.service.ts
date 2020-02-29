import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { CityService } from './city.service';
import { SecurityService } from './security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InmuebleModel } from '../models/inmueble.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private secService: SecurityService,
    private http: HttpClient) { }


  inmuebles: Observable<any>;
  inmueble: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });

  // METODO QUE GUARDA LAS IMAGENES EN EL LOOPBACK
  loadImagen(formData: FormData) {

    this.http.post("http://localhost:3000/api/containers/images/upload", formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }


  saveInmueble(inmueble: InmuebleModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/inmuebles?access_token=${token}`
    return this.http.post<InmuebleModel>(url_api, inmueble, { headers: this.headers })
      .pipe(map(data => data))
  }

  getAllInmueble() {
    const url_api = "http://localhost:3000/api/inmuebles";
    return this.http.get(url_api);
    
  }



}
