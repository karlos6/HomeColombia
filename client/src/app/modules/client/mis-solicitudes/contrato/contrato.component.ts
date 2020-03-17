import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmaiService } from 'src/app/services/emai.service';
import { SecurityService } from 'src/app/services/security.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { InmuebleModel } from 'src/app/models/inmueble.model';


declare var initMaterializeSelect: any;
declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  frmValidator: FormGroup;
  uploadedFiles: Array<File>;

  constructor(private fb: FormBuilder,
    private secSolicitud: SolicitudService,
    private secService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private secEmail: EmaiService,
    private secInmueble: InmuebleService) { }


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
  nameContrato() {
    let formData = {};
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData = (this.uploadedFiles[i].name)
    }
    return formData
  }

  SaveContrato() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secSolicitud.getSolicitudById(id).subscribe((solicitudes: SolicitudModel) => {
      this.upload()
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
        Estado: 'Ocupado',
        Imagen: solicitudes.Imagen,
        Comentario: solicitudes.Comentario,
        Codeudor: solicitudes.Codeudor,
        documento: this.nameContrato()
      }
        this.EstadoInmueble(c.InmuebleId)
        this.secSolicitud.updateSolicitud(c).subscribe();
        
        setTimeout(() =>{
        this.router.navigate(['/MisSolicitudes/list'])
        mensajeModalGenerico("Su solicitud fue aceptada");
        },300)
        
      })
  }


  EstadoInmueble(id: string){
    this.secInmueble.getInmuebleById(id).subscribe((inmueble: InmuebleModel) => {
      let c: InmuebleModel = {
        id: id,
        UserId: inmueble.UserId,
        Estado: 'Vendido',
        TipoOferta: inmueble.TipoOferta,
        TipoInmueble: inmueble.TipoInmueble,
        departmentId: inmueble.departmentId,
        departmentName: inmueble.departmentName,
        cityId: inmueble.cityId,
        cityName: inmueble.cityName,
        Barrio: inmueble.Barrio,
        Direccion: inmueble.Direccion,
        Precio: inmueble.Precio,
        Estrato: inmueble.Estrato,
        Area: inmueble.Area,
        NumeroHabitaciones: inmueble.NumeroHabitaciones,
        NumeroBanos: inmueble.NumeroBanos,
        EstadoInmueble: inmueble.EstadoInmueble,
        Descripcion: inmueble.Descripcion,
        Imagen: inmueble.Imagen
      }
      this.secInmueble.updateInmueble(c).subscribe()
    })
  }

}
