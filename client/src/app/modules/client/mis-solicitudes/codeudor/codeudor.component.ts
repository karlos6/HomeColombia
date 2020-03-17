import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SecurityService } from 'src/app/services/security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmaiService } from 'src/app/services/emai.service';
import { CodeudorModel } from 'src/app/models/codeudor.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';


declare var initMaterializeSelect: any;
declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-codeudor',
  templateUrl: './codeudor.component.html',
  styleUrls: ['./codeudor.component.css']
})
export class CodeudorComponent implements OnInit {

  frmValidator: FormGroup;
  uploadedFiles: Array<File>;

  constructor(private fb: FormBuilder,
    private secSolicitud: SolicitudService,
    private secService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private secEmail: EmaiService) { }


  ngOnInit() {
    this.formGenerator();
  }

  ngAfterViewInit() {
    initMaterializeSelect()
  }

  get fv() {
    return this.frmValidator.controls;
  }

  formGenerator() {
    this.frmValidator = this.fb.group({
      Nombre: ['', [Validators.required]],
      Apellido: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      Cedula: ['', [Validators.required]],
      Correo: ['', [Validators.required]],
      Documento: ['', [Validators.required]]
    });
  }


  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  //  METODO PARA CARGAR LAS IMAGENES
  upload() {

    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.secSolicitud.loadDocumento(formData);

  }


  //OBTENER NOMBRE DE LAS IMAGENES SELECCIONADAS
  nameLaboral() {
    let formData = {};
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData = (this.uploadedFiles[i].name)
    }
    return formData
  }

  SaveCodeudor() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secSolicitud.getSolicitudById(id).subscribe((solicitudes: SolicitudModel) => {
      let x = {
        nombre: this.fv.Nombre.value,
        apellido: this.fv.Apellido.value,
        cedula: this.fv.Cedula.value,
        telefono: this.fv.Telefono.value,
        correo: this.fv.Correo.value,
        documento: this.nameLaboral()
      }
      let c: SolicitudModel = {
        id: solicitudes.id,
        ClientId: solicitudes.ClientId,
        UserId: solicitudes.UserId,
        InmuebleId: solicitudes.InmuebleId,
        TipoOferta: solicitudes.TipoOferta,
        TipoInmueble: solicitudes.TipoInmueble,
        departmentName: solicitudes.departmentName,
        cityName: solicitudes.cityName,
        Barrio: solicitudes.Barrio,
        Direccion: solicitudes.Direccion,
        Precio: solicitudes.Precio,
        Fecha: solicitudes.Fecha,
        Estado: solicitudes.Estado,
        Imagen: "Aceptado",
        Comentario: solicitudes.Comentario,
        Codeudor: x,
        documento: this.nameLaboral()
      }

      if(c.documento != undefined){
        this.secSolicitud.saveCodeudor(c).subscribe();
      }else{
        mensajeModalGenerico("No ha ingresado un documento");
      }
      
      
    })
  }


}
