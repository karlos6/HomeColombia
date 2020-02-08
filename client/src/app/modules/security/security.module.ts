import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
