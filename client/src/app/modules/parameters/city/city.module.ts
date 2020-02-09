import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import {NgxPaginationModule}  from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CityListComponent, CityEditorComponent, CityCreatorComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CityModule { }
