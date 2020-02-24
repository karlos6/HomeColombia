import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DepartmentModel } from '../models/department.model';
import { SecurityService } from './security.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient,
    private secService: SecurityService) { }


  departments: Observable<any>;
  department: Observable<any>;


  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.secService.getToken()
  });

  getAllDepartments() {
    const url_api = "http://localhost:3000/api/departments";
    return this.http.get(url_api);
  }


  deleteDepartment(id: String) {
    //TODO: Obtener token
    //TODO: not null
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/departments/${id}/?access_token=${token}`
    return this.http.delete<DepartmentModel>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }


  saveDepartment(department: DepartmentModel) {
    //TODO: Obtener token
    //TODO: not null
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/departments?access_token=${token}`
    return this.http.post<DepartmentModel>(url_api, department, { headers: this.headers })
      .pipe(map(data => data));
  }

  getDepartmentById(id: string) {
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/departments/${id}?access_token=${token}`
    return this.department = this.http.get(url_api);
  }


  updateDepartment(department) {
    const deptId = department.id;
    let token = this.secService.getToken();
    const url_api = `http://localhost:3000/api/departments/${deptId}/?access_token=${token}`
    return this.http.put<DepartmentModel>(url_api, department, { headers: this.headers })
      .pipe(map(data => data));
  }
}