import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ActivatedRoute } from '@angular/router';
import { InmuebleModel } from 'src/app/models/inmueble.model';

@Component({
  selector: 'app-inmueble-view',
  templateUrl: './inmueble-view.component.html',
  styleUrls: ['./inmueble-view.component.css']
})
export class InmuebleViewComponent implements OnInit {

  constructor(private secInmueble : InmuebleService,
    private route :  ActivatedRoute) { }

  private inmuebles: InmuebleModel;

  ngOnInit() {
    this.getInmuebleInfo() 
  }

  

  getInmuebleInfo() {
    let id = this.route.snapshot.paramMap.get("id")
    this.secInmueble.getInfoInmuebleById(id)
    .subscribe((inmuebles : InmuebleModel) => (this.inmuebles = inmuebles))
      
  }
}
