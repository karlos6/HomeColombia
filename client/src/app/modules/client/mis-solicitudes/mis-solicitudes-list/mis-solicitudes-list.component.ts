import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

declare var openConfirmationModal: any;
declare var mensajeModalGenerico: any;
declare var Detalles: any;


@Component({
  selector: 'app-mis-solicitudes-list',
  templateUrl: './mis-solicitudes-list.component.html',
  styleUrls: ['./mis-solicitudes-list.component.css']
})
export class MisSolicitudesListComponent implements OnInit {

  p: number = 1;

  codeToRemove: String;
  lista : string;

  constructor(private secSolicitud: SolicitudService,
    private secService: SecurityService,
    private router : Router) { }

  private solicitudes: SolicitudModel;

  ngOnInit() {
    this.getListSolicitusxCliente()
  }

  getListCity() {
    this.secSolicitud.getAllSolicitud()
      .subscribe((solicitudes: SolicitudModel) => (this.solicitudes = solicitudes))
  }

  getListSolicitusxCliente() {
    this.secService.getUserInfo().subscribe(user => {
      this.secSolicitud.getSolicitudsxCliente(user.userId)
        .subscribe((solicitudes: SolicitudModel) => {
          const array = solicitudes
          if (array[0] == undefined){
             mensajeModalGenerico("No ha realizado ninguna solicitud hasta el momento");
             
             this.router.navigate(['/home'])
          }else{
            (this.solicitudes = solicitudes)
          }
        })
          
    })

  }

  openConfirmation(code: String) {
    this.codeToRemove = code;
    openConfirmationModal()

  }

  DeleteCity() {
    this.secSolicitud.deleteSolicitud(this.codeToRemove).subscribe();
    setTimeout(() => {
      this.getListSolicitusxCliente()
    }, 500)
  }

  Detalles(id : string){
    this.secSolicitud.getSolicitudById(id).subscribe((solicitud: SolicitudModel) => {
      mensajeModalGenerico(`Estado actual de su solicitud fue : ${solicitud.Estado} <br> Comentarios : ${solicitud.Comentario}`);
    })
  }

  getDoc (){
    this.secSolicitud.getDocumente()
  }

}
