import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import {NgxPaginationModule}  from 'ngx-pagination';
import { DecisionComponent } from './decision/decision.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetAsesorComponent } from './set-asesor/set-asesor.component'

@NgModule({
  declarations: [SolicitudListComponent, DecisionComponent, SetAsesorComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudModule { }
