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
   private http :  HttpClient) { }


}
