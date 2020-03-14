import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';

declare var modal: any;

@Component({
  selector: 'app-mis-solicitudes-list',
  templateUrl: './mis-solicitudes-list.component.html',
  styleUrls: ['./mis-solicitudes-list.component.css']
})
export class MisSolicitudesListComponent implements OnInit {

  p: number = 1;

  codeToRemove: String;
  constructor(private secSolicitud: SolicitudService) { }

  private solicitudes: SolicitudModel;

  ngOnInit() {
    this.getListCity()
  }

  getListCity() {
    this.secSolicitud.getAllSolicitud()
      .subscribe((solicitudes: SolicitudModel) => (this.solicitudes = solicitudes))
  }

}
