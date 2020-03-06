import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { CityService } from 'src/app/services/city.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { DepartmentModel } from 'src/app/models/department.model';
import { CityModel } from 'src/app/models/city.model';
import { InmuebleModel } from 'src/app/models/inmueble.model';

declare var initMaterializeSelect: any;

@Component({
  selector: 'app-inmueble-editor',
  templateUrl: './inmueble-editor.component.html',
  styleUrls: ['./inmueble-editor.component.css']
})
export class InmuebleEditorComponent implements OnInit {

  frmValidator: FormGroup;
  uploadedFiles: Array<File>;

  constructor(private fb: FormBuilder,
    private router: Router,
    private deptService: DepartmentService,
    private cityService: CityService,
    private secInmueble: InmuebleService,
    private route: ActivatedRoute) { }

  private departments: DepartmentModel;
  private cities: CityModel;

  ngOnInit() {
    this.formGenerator();
    this.getInmuebleInfo()
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

  //Obtener información del inmueble con su Id
  getInmuebleInfo() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInmuebleById(id).subscribe((inmueble: InmuebleModel) => {
      this.fv.TipoOferta.setValue(inmueble.TipoOferta)
      this.fv.TipoInmueble.setValue(inmueble.TipoInmueble)
      this.fv.departmentId.setValue(inmueble.departmentId)
      this.fv.cityId.setValue(inmueble.cityId)
      this.fv.Barrio.setValue(inmueble.Barrio)
      this.fv.Direccion.setValue(inmueble.Direccion)
      this.fv.Precio.setValue(inmueble.Precio)
      this.fv.Estrato.setValue(inmueble.Estrato)
      this.fv.Area.setValue(inmueble.Area)
      this.fv.NumeroHabitaciones.setValue(inmueble.NumeroHabitaciones)
      this.fv.NumeroBanos.setValue(inmueble.NumeroBanos)
      this.fv.EstadoInmueble.setValue(inmueble.EstadoInmueble)
      this.fv.Descripcion.setValue(inmueble.Descripcion)
      this.fv.Imagen.setValue(inmueble.Imagen)
    })
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

    if (this.uploadedFiles == undefined) {
      return false
    } else {
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData = (this.uploadedFiles[i].name)
      }
      return formData
    }

  }

  UpdateInmueble() {

    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInmuebleById(id).subscribe((inmueble: InmuebleModel) => {
      this.cityService.getCityById(this.fv.cityId.value).subscribe((cities: CityModel) => {
        if (this.nameImagen() == false) {
          let c: InmuebleModel = {
            id: this.route.snapshot.paramMap.get("id"),
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
            Imagen: inmueble.Imagen
          }
          console.log(c)
          this.secInmueble.updateInmueble(c).subscribe()
        } else {
          let c: InmuebleModel = {
            id: this.route.snapshot.paramMap.get("id"),
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
          console.log(c)
          this.secInmueble.updateInmueble(c).subscribe()
        }
      })

    })
    setTimeout(() => {
      this.router.navigate(['/inmueble/list'])
    }, 500)
  }

}




