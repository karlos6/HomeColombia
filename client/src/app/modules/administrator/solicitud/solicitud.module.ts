import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import {NgxPaginationModule}  from 'ngx-pagination';

@NgModule({
  declarations: [SolicitudListComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    NgxPaginationModule
  ]
})
export class SolicitudModule { }
