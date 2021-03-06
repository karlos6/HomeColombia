import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecaptchaModule,RecaptchaFormsModule} from 'ng-recaptcha';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent, EmailComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
    
  ]
})
export class SecurityModule { }
