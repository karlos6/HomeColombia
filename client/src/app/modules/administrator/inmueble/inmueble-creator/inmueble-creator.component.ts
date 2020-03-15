import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { CityService } from 'src/app/services/city.service';
import { DepartmentModel } from 'src/app/models/department.model';
import { CityModel } from 'src/app/models/city.model';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { HttpClient } from '@angular/common/http';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { LoginUserModel } from 'src/app/models/loginUser.model';
import { SecurityService } from 'src/app/services/security.service';


declare var initMaterializeSelect: any;


@Component({
  selector: 'app-inmueble-creator',
  templateUrl: './inmueble-creator.component.html',
  styleUrls: ['./inmueble-creator.component.css']
})
export class InmuebleCreatorComponent implements OnInit {

  frmValidator: FormGroup;
  uploadedFiles: Array<File>;

  constructor(private fb: FormBuilder,
    private router: Router,
    private deptService: DepartmentService,
    private cityService: CityService,
    private secInmueble: InmuebleService,
    private secService: SecurityService) { }

  private departments: DepartmentModel;
  private cities: CityModel;

  ngOnInit() {
    this.formGenerator();
    this.getListDepartment();
    this.getListCityxDepartment();
  }

  ngAfterViewInit() {
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
      NumeroBanos: ['', [Validators.required]],
      EstadoInmueble: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],

    });
  }


  getListDepartment() {
    this.deptService.getAllDepartments()
      .subscribe((departments: DepartmentModel) => (this.departments = departments));
  }

  getListCityxDepartment() {
    let dept = this.fv.departmentId.value;
    this.cityService.getCitesxDepartment(dept)
      .subscribe((cities: CityModel) => (this.cities = cities))

  }


  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  //  METODO PARA CARGAR LAS IMAGENES
  upload() {

    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      console.log(this.uploadedFiles[i].name)
    }
    this.secInmueble.loadImagen(formData);

  }

  //OBTENER NOMBRE DE LAS IMAGENES SELECCIONADAS
  nameImagen() {
    let formData = {};
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData = (this.uploadedFiles[i].name)
    }
    return formData
  }


  //GUADAR INMUEBLES
  SaveInmueble() {
    this.secService.getUserInfo().subscribe(user => {
      this.cityService.getCityById(this.fv.cityId.value).subscribe((cities: CityModel) => {
        this.upload()
        let c: InmuebleModel = {
          UserId : user.userId,
          TipoOferta: this.fv.TipoOferta.value,
          TipoInmueble: this.fv.TipoInmueble.value,
          departmentId: this.fv.departmentId.value,
          departmentName: cities.departmentName,
          cityId: this.fv.cityId.value,
          cityName: cities.name,
          Barrio: this.fv.Barrio.value,
          Direccion: this.fv.Direccion.value,
          Precio: this.fv.Precio.value,
          Estrato: this.fv.Estrato.value,
          Area: this.fv.Area.value,
          NumeroHabitaciones: this.fv.NumeroHabitaciones.value,
          NumeroBanos: this.fv.NumeroBanos.value,
          EstadoInmueble: this.fv.EstadoInmueble.value,
          Descripcion: this.fv.Descripcion.value,
          Imagen: this.nameImagen()
        }
        this.secInmueble.saveInmueble(c).subscribe();
        setTimeout(() =>{
        this.router.navigate(['/inmueble/list'])
        },500)

      })
    })
  }





}
