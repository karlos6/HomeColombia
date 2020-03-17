import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var initMaterializeSelect: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private secInmueble: InmuebleService) { }

  private inmuebles: InmuebleModel

  ngOnInit() {
    this.formGenerator();  
    this.getListTipoInmueble();
  }
  
  ngAfterViewInit() {
    initMaterializeSelect()
    this.getListInmuebleByEstado()
  }

  get fv() {
    return this.frmValidator.controls;
  }

  formGenerator() {
    this.frmValidator = this.fb.group({
      TipoOferta: ['', [Validators.required]],
      TipoInmueble : ['', [Validators.required]]
    });
  }

  getListInmuebleByEstado(){
    this.secInmueble.getInfoInmuebleByEstado().
    subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles));
  }

  getListInmueble() {
    this.secInmueble.getAllInmueble()
      .subscribe((inmuebles: InmuebleModel) => (this.inmuebles = inmuebles));
  }

  getListOfertaxInmueble() {
    let oferta= this.fv.TipoOferta.value;
    this.secInmueble.getOfertaxInmueble(oferta)
    .subscribe((inmuebles : InmuebleModel) => (this.inmuebles = inmuebles))
  }
  getListTipoInmueble() {
    let tipo= this.fv.TipoInmueble.value;
    this.secInmueble.getTipoInmueble(tipo)
    .subscribe((inmuebles : InmuebleModel) => (this.inmuebles = inmuebles))
  }


}
