import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-editor',
  templateUrl: './department-editor.component.html',
  styleUrls: ['./department-editor.component.css']
})
export class DepartmentEditorComponent implements OnInit {

  frmValidator : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  fv(){
    return this.frmValidator.controls
  }

  
  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
