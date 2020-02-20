import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-creator',
  templateUrl: './department-creator.component.html',
  styleUrls: ['./department-creator.component.css']
})
export class DepartmentCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGenerator()
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get fv(){
    return this.frmValidator.controls;
  }

}
