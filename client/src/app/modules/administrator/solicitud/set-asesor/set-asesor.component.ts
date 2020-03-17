import { Component, OnInit } from '@angular/core';
import { AdviserService } from 'src/app/services/adviser.service';
import { UserModel } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var openConfirmationModal: any;
@Component({
  selector: 'app-set-asesor',
  templateUrl: './set-asesor.component.html',
  styleUrls: ['./set-asesor.component.css']
})
export class SetAsesorComponent implements OnInit {
  p: number =1;
  
  codeToRemove:  String;
  constructor(private adviserService: AdviserService, private router:Router,private route: ActivatedRoute,private secSolicitud: SolicitudService) { }
  users: UserModel[];
   ngOnInit() {
     this.getListUser();
     console.log(this.users)
   }


   getListUser(){
  
    this.adviserService.getAllUsers().subscribe((data) => {
      this.users = data
    });

   }

  openConfirmation(code: String){
    this.codeToRemove =  code;
    openConfirmationModal()
   
  }
changeAsesor(idAs:string){
  let id = this.route.snapshot.paramMap.get("id")
  this.secSolicitud.getSolicitudById(id).subscribe((solicitudes: SolicitudModel) => {
    let c: SolicitudModel = {
      id: solicitudes.id,
      ClientId: solicitudes.ClientId,
      UserId: idAs,
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
      Imagen: solicitudes.Imagen,
      Comentario: solicitudes.Comentario
    }
    this.secSolicitud.updateSolicitud(c).subscribe();
    this.router.navigate(['/solicitud/list'])
  })
}

  DeleteCity() {
    this.adviserService.deleteUser(this.codeToRemove).subscribe();
    setTimeout(() => {      
    this.getListUser()
     }, 1000)
  }
}

