import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { InmuebleListComponent } from './inmueble-list/inmueble-list.component';
import { InmuebleCreatorComponent } from './inmueble-creator/inmueble-creator.component';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule}  from 'ngx-pagination';
import { InmuebleViewComponent } from './inmueble-view/inmueble-view.component';

@NgModule({
  declarations: [InmuebleListComponent, InmuebleCreatorComponent, InmuebleEditorComponent, InmuebleViewComponent],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InmuebleModule { }
