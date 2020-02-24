import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


declare var initMaterializeSelect: any
@Component({
  selector: 'app-inmueble-creator',
  templateUrl: './inmueble-creator.component.html',
  styleUrls: ['./inmueble-creator.component.css']
})
export class InmuebleCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formGenerator();
  }

  ngAfterViewInit(){
    initMaterializeSelect()
  }

  get fv() {
    return this.frmValidator.controls;
  }

  formGenerator() {
    this.frmValidator = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      image: ['', [Validators.required]],
      countryId: ['', Validators.required],
      cityId: ['', Validators.required]
    });
  }
}
