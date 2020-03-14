import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient,
    private secService: SecurityService) { }


  cities: Observable<any>;
  city: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });

  getAllCities() {
    const url_api = "http://localhost:3000/api/cities";
    return this.http.get(url_api);
    
  }

  saveCity(city: CityModel) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/cities?access_token=${token}`
    return this.http.post<CityModel>(url_api, city, { headers: this.headers })
      .pipe(map(data => data))
  }

  deleteCity(id: String) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/cities/${id}/?access_token=${token}`
    return this.http.delete<CityModel>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }

  
  getCityById(id: string) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/cities/${id}?access_token=${token}`
    return this.city = this.http.get(url_api);
  }

  updateCity(city){
    const cityId =  city.id;
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/cities/${cityId}/?access_token=${token}`
    return this.http.put<CityModel>(url_api, city, {headers : this.headers})
    .pipe(map(data => data));
  }

  getCitesxDepartment(departmentId: string){
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/cities?filter=%7B%22where%22%20%3A%20%7B%22departmentId%22%20%3A%20%7B%20%22like%22%20%3A%20%22${departmentId}%22%7D%7D%7D&access_token=${token}`
    return this.city = this.http.get(url_api);
  }
}
