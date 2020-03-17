import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

import { DepartmentModel } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-creator',
  templateUrl: './department-creator.component.html',
  styleUrls: ['./department-creator.component.css']
})
export class DepartmentCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private deptService: DepartmentService) { }

    private departments: DepartmentModel;

  ngOnInit() {
    this.formGenerator();
  }

  get fv() {
    return this.frmValidator.controls;
  }

  formGenerator() {
    this.frmValidator = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  SaveDepartment() {
    let c : DepartmentModel = {
      code: this.fv.code.value,
      name: this.fv.name.value
    }
    this.deptService.saveDepartment(c).subscribe();
    this.router.navigate(['/department/list'])
    
  }

}
