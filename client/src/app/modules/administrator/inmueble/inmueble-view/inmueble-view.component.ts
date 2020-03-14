import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { SolicitudService } from 'src/app/services/solicitud.service';

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
    private route: ActivatedRoute) { }

  private inmuebles: InmuebleModel;

  ngOnInit() {
    this.getInmuebleInfo()
  }

  getInmuebleInfo() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInfoInmuebleById(id)
      .subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles))
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
      console.log(user.isLogged)
      if(user.isLogged == false){
        mensajeModalGenerico("Debe Iniciar sesion");
      }else{
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
          console.log(c)
          this.secSolicitud.saveSolicitud(c).subscribe()
          this.router.navigate(['/home'])
        })
      }

    })

  }


}
