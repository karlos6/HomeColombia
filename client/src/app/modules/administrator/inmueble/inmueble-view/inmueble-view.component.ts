import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { EmaiService } from 'src/app/services/emai.service';

declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-inmueble-view',
  templateUrl: './inmueble-view.component.html',
  styleUrls: ['./inmueble-view.component.css']
})
export class InmuebleViewComponent implements OnInit {

  constructor(private secInmueble: InmuebleService,
    private secService: SecurityService,
    private secSolicitud: SolicitudService,
    private router: Router,
    private route: ActivatedRoute,
    private secEmail: EmaiService ) { }

  private inmuebles: InmuebleModel;

  ngOnInit() {
    this.getInmuebleInfo()
  }

  getInmuebleInfo() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInfoInmuebleById(id)
      .subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles))
  }

  sendDataEmail() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInmuebleById(id).subscribe((inmueble: InmuebleModel) => {
      this.secService.getUserById(inmueble.UserId).subscribe((user: UserModel) => {
        this.secService.getUserInfo().subscribe(users => {
          let infoUser = `
          nombre : ${users.user.username},
          apellido :  ${users.user.lastName},
          telefono : ${users.user.cellphone},
          correo : ${users.user.email}`

          let infoInmueble = `
          Tipo Oferta: ${inmueble.TipoOferta},
          Tipo Inmueble: ${inmueble.TipoInmueble},
          departamento: ${inmueble.departmentName},
          ciudad: ${inmueble.cityName},
          Barrio: ${inmueble.Barrio},
          Dirección: ${inmueble.Direccion},
          Precio: ${inmueble.Precio},
          Estrato: ${inmueble.Estrato},
          Area: ${inmueble.Area},
          Número Habitaciones: ${inmueble.NumeroHabitaciones},
          Número Baños: ${inmueble.NumeroBanos},
          Estado del Inmueble: ${inmueble.EstadoInmueble},
          Descripción: ${inmueble.Descripcion}`

          this.secEmail.sendEmai(`Solicito de estudio del inmueble.
        cliente:  ${infoUser},
        para el inmueble : ${infoInmueble}`, "Solicitud Inmueble",
            user.email).subscribe(c => {
              mensajeModalGenerico("You message was send");
              this.router.navigate(['/home']);
            });
        })
      })
    })
  }


  SaveSolicitud() {
    var date = new Date();
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };
    let id = this.route.snapshot.paramMap.get("id")
    this.secService.getUserInfo().subscribe(user => {
      if (user.isLogged == false) {
        mensajeModalGenerico("Debe Iniciar sesion");
      } else {
        this.secInmueble.getInmuebleById(id).subscribe((inmueble: InmuebleModel) => {
          let c: SolicitudModel = {
            ClientId: user.userId,
            UserId: inmueble.UserId,
            InmuebleId: inmueble.id,
            TipoOferta: inmueble.TipoOferta,
            TipoInmueble: inmueble.TipoInmueble,
            departmentName: inmueble.departmentName,
            cityName: inmueble.cityName,
            Barrio: inmueble.Barrio,
            Direccion: inmueble.Direccion,
            Precio: inmueble.Precio,
            Fecha: date.toLocaleDateString("en", options),
            Estado: 'enviado',
            Imagen: inmueble.Imagen
          }
          this.secSolicitud.saveSolicitud(c).subscribe()
          this.router.navigate(['/home'])
          this.sendDataEmail()
        })
      }
    })
  }




}
