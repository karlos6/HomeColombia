import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  p: number = 1;

  codeToRemove: String;
  constructor(private secSolicitud: SolicitudService,
    private secService: SecurityService,
    private router : Router) { }

  private solicitudes: SolicitudModel;
  rol:String;
  ngOnInit() {
    this.getListSolicutudxUser(),
    this.rol=this.secService.userRol();
  }

  getListSolicitud() {
    this.secSolicitud.getAllSolicitud()
      .subscribe((solicitudes: SolicitudModel) => (this.solicitudes = solicitudes))
  }

  getListSolicutudxUser() {
    this.secService.getUserInfo().subscribe(user => {
      this.secSolicitud.getSolicitudsxUser(user.userId).subscribe((solicitudes: SolicitudModel) => (this.solicitudes = solicitudes))

    })

  }

  UpdateSolicitud(id: string) {
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
        Estado: 'En Estudio',
        Imagen: solicitudes.Imagen
      }

      this.secSolicitud.updateSolicitud(c).subscribe();
      setTimeout(()=>{
        this.router.navigate(['/solicitud/list'])
        this.getListSolicutudxUser()
      }, 300)
     
     
    })
  }



  /*
  openConfirmation(code: String) {
    this.codeToRemove = code;
    openConfirmationModal()

  }

  DeleteCity() {
    this.cityService.deleteCity(this.codeToRemove).subscribe();
    setTimeout(() => {
      this.getListCity()
    }, 500)
    console.log("eliminado")
  }
  */
}
