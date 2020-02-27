import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { CityService } from 'src/app/services/city.service';
import { DepartmentModel } from 'src/app/models/department.model';
import { CityModel } from 'src/app/models/city.model';


declare var initMaterializeSelect: any;


@Component({
  selector: 'app-inmueble-creator',
  templateUrl: './inmueble-creator.component.html',
  styleUrls: ['./inmueble-creator.component.css']
})
export class InmuebleCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private router:   Router ,
    private deptService: DepartmentService,
    private  cityService : CityService) { }

  private departments: DepartmentModel;
  private cities: DepartmentModel;

  ngOnInit() {
    this.formGenerator();
    this.getListDepartment();
    this.getListCityxDepartment();
    
  }

  ngAfterViewInit(){
    initMaterializeSelect()
  }

  get fv() {
    return this.frmValidator.controls;
  }

  formGenerator() {
    this.frmValidator = this.fb.group({
      TipoOferta: ['', [Validators.required]],
      TipoInmueble: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      departmentName: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
      
      Barrio: ['', [Validators.required]],
      Direccion: ['', [Validators.required]],
      Precio: ['', [Validators.required]],
      Estrato: ['', [Validators.required]],
      Area: ['', [Validators.required]],
      NumeroHabitaciones: ['', [Validators.required]],
      NumeroBaños: ['', [Validators.required]],
      EstadoInmueble: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      
    });
  }

  
  getListDepartment() {
    this.deptService.getAllDepartments()
    .subscribe((departments: DepartmentModel) => (this.departments = departments));
  }

  getListCityxDepartment(){
   this.cityService.getCitesxDepartment("CALDAS")
   .subscribe((cities: CityModel) => (this.cities = cities))
  
  }

}
