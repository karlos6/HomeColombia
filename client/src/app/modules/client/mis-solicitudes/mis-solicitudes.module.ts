import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisSolicitudesRoutingModule } from './mis-solicitudes-routing.module';
import { MisSolicitudesListComponent } from './mis-solicitudes-list/mis-solicitudes-list.component';
import {NgxPaginationModule}  from 'ngx-pagination';
import { CodeudorComponent } from './codeudor/codeudor.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [MisSolicitudesListComponent, CodeudorComponent],
  imports: [
    CommonModule,
    MisSolicitudesRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MisSolicitudesModule { }
