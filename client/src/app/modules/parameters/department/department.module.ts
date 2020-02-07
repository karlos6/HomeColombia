import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentCreatorComponent } from './department-creator/department-creator.component';
import { DepartmentEditorComponent } from './department-editor/department-editor.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {NgxPaginationModule}  from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepartmentCreatorComponent, DepartmentEditorComponent, DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentModule { }
