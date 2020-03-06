import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  constructor(private secInmueble: InmuebleService) { }

  private inmuebles: InmuebleModel

  ngOnInit() {
    this.getListInmueble()
  }

  getListInmueble() {
    this.secInmueble.getAllInmueble()
      .subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles));
  }

}
