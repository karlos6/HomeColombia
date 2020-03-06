import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-inmueble-list',
  templateUrl: './inmueble-list.component.html',
  styleUrls: ['./inmueble-list.component.css']
})
export class InmuebleListComponent implements OnInit {

  index: number =3;
  p: number = 1;
  constructor(private secInmueble: InmuebleService) { }

  private inmuebles: InmuebleModel

  codeToRemove: String;

  ngOnInit() {
    this.getListInmueble()
  }

  getListInmueble() {
    this.secInmueble.getAllInmueble()
      .subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles));
  }

  openConfirmation(code: String) {
    this.codeToRemove = code;
    openConfirmationModal()

  }

  DeleteCity() {
    this.secInmueble.deleteInmueble(this.codeToRemove).subscribe();
    setTimeout(() => {
      this.getListInmueble()
    }, 500)
    console.log("eliminado")
  }

}
