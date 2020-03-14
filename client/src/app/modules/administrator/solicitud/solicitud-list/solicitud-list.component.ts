import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

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
