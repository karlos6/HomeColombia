import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-creator',
  templateUrl: './city-creator.component.html',
  styleUrls: ['./city-creator.component.css']
})
export class CityCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGenerator
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      departmentId: ['', Validators.required]
    })
  }
}
