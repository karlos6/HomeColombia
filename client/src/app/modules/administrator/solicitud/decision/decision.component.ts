import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmaiService } from 'src/app/services/emai.service';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';

declare var initMaterializeSelect: any;
declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  frmValidator: FormGroup;

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
      Comentario: ['', [Validators.required]]
    });
  }

  sendDataEmail() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secSolicitud.getSolicitudById(id).subscribe((solicitud: SolicitudModel) => {
      this.secService.getUserById(solicitud.ClientId).subscribe((user: UserModel) => {
        this.secEmail.sendEmai(this.fv.Comentario.value, "Respuesta Solicitud Inmueble",
          user.email).subscribe(c => {
            mensajeModalGenerico("You message was send");
          });
      })
    })
  }

  UpdateSolicitud() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secSolicitud.getSolicitudById(id).subscribe((solicitudes: SolicitudModel) => {
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
        Estado: this.fv.Estado.value,
        Imagen: solicitudes.Imagen,
        Comentario: this.fv.Comentario.value
      }
      console.log(c)
      this.secSolicitud.updateSolicitud(c).subscribe();
      this.sendDataEmail(),
      this.router.navigate(['/solicitud/list'])
    })
  }

}
