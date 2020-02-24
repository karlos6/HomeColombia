import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { CityService } from 'src/app/services/city.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { CityModel } from 'src/app/models/city.model';

declare var initMaterializeSelect: any;

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.css']
})
export class CityEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private deptService :DepartmentService,
    private cityService : CityService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  private departments: DepartmentModel;
 

  ngOnInit() {
    this.formGenerator();
    this.getListDepartment();
    this.getCityInfo();
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
      departmentName: ['', Validators.required]
    });
  }

  getCityInfo(){
    let id = this.route.snapshot.paramMap.get("id")
    this.cityService.getCityById(id).subscribe((city: CityModel) => {
      this.fv.code.setValue(city.code)
      this.fv.name.setValue(city.name)
      this.fv.departmentId.setValue(city._departmentId)
    });  
  }

  getListDepartment() {
    this.deptService.getAllDepartments()
    .subscribe((departments: DepartmentModel) => (this.departments = departments));
  }


  UpdateCity(){
      this.deptService.getDepartmentById(this.fv.departmentId.value).subscribe((departments: DepartmentModel) => {
        let c : CityModel = {
          id  : this.route.snapshot.paramMap.get("id"),
          code: this.fv.code.value,
          name: this.fv.name.value,
          _departmentId  : this.fv.departmentId.value,
          departmentName : departments.name 
        }
        console.log(c)
        this.cityService.updateCity(c).subscribe();
        this.router.navigate(['/city/list'])
      }) 
    
 
  }

}
