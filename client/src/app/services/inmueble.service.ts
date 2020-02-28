import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { CityService } from './city.service';
import { SecurityService } from './security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private secService: SecurityService,
    private http: HttpClient) { }

// METODO QUE GUARDA LAS IMAGENES EN EL LOOPBACK
  loadImagen(formData: FormData) {

    this.http.post("http://localhost:3000/api/containers/images/upload", formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })

  }




}
