import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdminCreatorComponent } from './admin-creator/admin-creator.component';
import { RecaptchaModule,RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphicsComponent } from './graphics/graphics.component'


@NgModule({
  declarations: [AdminCreatorComponent, GraphicsComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
     AdminCreatorComponent
  ]

  
})
export class AdministratorModule { }
