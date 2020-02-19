import { Component, OnInit } from '@angular/core';

import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/department.model';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  p: number = 1;
  codeToRemove:  String;
  constructor(private deptService: DepartmentService) { }

  private departments: DepartmentModel;

  ngOnInit() {
    this.getListDepartment();
  }
  
  getListDepartment() {
    this.deptService.getAllDepartments()
    .subscribe((departments: DepartmentModel) => (this.departments = departments));
  }

  openConfirmation(code: String){
    this.codeToRemove =  code;
    console.log("hola")
    openConfirmationModal()
   
  }

  onDeleteDepartment() {
    this.deptService.deleteDepartment(this.codeToRemove).subscribe();
    setTimeout(() => {      
    this.getListDepartment()
     }, 700)
     console.log("eliminado")
  }

}
