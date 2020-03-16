import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviserRoutingModule } from './adviser-routing.module';
import { AdviserCreatorComponent } from './adviser-creator/adviser-creator.component';
import { AdviserEditorComponent } from './adviser-editor/adviser-editor.component';
import { AdviserListComponent } from './adviser-list/adviser-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';


@NgModule({
  declarations: [AdviserCreatorComponent, AdviserEditorComponent, AdviserListComponent],
  imports: [
    CommonModule,
    AdviserRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports:[
    AdviserCreatorComponent, AdviserEditorComponent, AdviserListComponent
  ]
  
})
export class AdviserModule { }
