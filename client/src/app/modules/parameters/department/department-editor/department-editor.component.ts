import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { DepartmentService } from 'src/app/services/department.service';

import { DepartmentModel } from 'src/app/models/department.model';


import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-editor',
  templateUrl: './department-editor.component.html',
  styleUrls: ['./department-editor.component.css']
})
export class DepartmentEditorComponent implements OnInit {

  frmValidator : FormGroup;

  constructor(private route: ActivatedRoute,
    private fb:FormBuilder,
    private deptService : DepartmentService,  
    private router : Router) {

}

  ngOnInit() {
    this.formGenerator()
    this.getDepartementInfo();
  }

  get fv(){
    return this.frmValidator.controls;
  }

  
  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  getDepartementInfo(){
    let id = this.route.snapshot.paramMap.get("id")
    this.deptService.getDepartmentById(id).subscribe((departments: DepartmentModel) => {
      this.fv.code.setValue(departments.code)
      this.fv.name.setValue(departments.name)
    });  
  }

  UpdateDepartment(){
    let c : DepartmentModel = {
      id  : this.route.snapshot.paramMap.get("id"),
      code: this.fv.code.value,
      name: this.fv.name.value
    }
    this.deptService.updateDepartment(c).subscribe();
    this.router.navigate(['/department/list'])
  }
 

}
