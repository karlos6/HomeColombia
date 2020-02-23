import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { CityService } from 'src/app/services/city.service';
import {CityModel }  from 'src/app/models/city.model';
import { DepartmentModel } from 'src/app/models/department.model';
import { Router } from '@angular/router';

declare var initMaterializeSelect: any;

@Component({
  selector: 'app-city-creator',
  templateUrl: './city-creator.component.html',
  styleUrls: ['./city-creator.component.css']
})
export class CityCreatorComponent implements OnInit {
  
  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private deptService :DepartmentService,
    private cityService : CityService,
    private router: Router
    ) { }

  private departments: DepartmentModel;
 

  ngOnInit() {
    this.formGenerator();
    this.getListDepartment();
  }

  ngAfterViewInit(){
    initMaterializeSelect()
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      departmentId: ['', Validators.required],
      departmentName: ['']
    });
  }

  getListDepartment() {
    this.deptService.getAllDepartments()
    .subscribe((departments: DepartmentModel) => (this.departments = departments));
  }




  SaveCity() {
    this.deptService.getDepartmentById(this.fv.departmentId.value).subscribe((departments: DepartmentModel) => {
      let c : CityModel = {
        code: this.fv.code.value,
        name: this.fv.name.value,
        _departmentId  : this.fv.departmentId.value,
        departmentName : departments.name 
      }
      this.cityService.saveCity(c).subscribe();
      this.router.navigate(['/city/list'])
    })  
  }

}
