import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
declare var openConfirmationModal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  RValidation: FormGroup;

  constructor(private rb: FormBuilder, private secSevice: SecurityService, private router: Router) { }

  ngOnInit() {
    this.RValidationBuilder();
  }

  /* VALIDACIONES */
  RValidationBuilder() {
    this.RValidation = this.rb.group({

      username: ['carlos', [Validators.required]],
      lastname: ['muñoz', [Validators.required]],
      email: ['carlos@gmail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.email]],
      password: ['12345', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]],
      phone: ['32134567', [Validators.required]]

    });
  }

  /* OPTENER CONTROLES DE VALIDACIONES */
  get rr() {
    return this.RValidation.controls;
  }

  /* REGISTRO USUARIO */
  onRegister() {

    if (this.RValidation.valid && this.captchap != null) {
      let c = new UserModel();
      c = {
        username: this.rr.username.value,
        lastName: this.rr.lastname.value,
        email: this.rr.email.value,
        password: this.rr.password.value,
        cellphone: this.rr.phone.value
      }
      this.secSevice.registerUser(c).subscribe(c => {
        this.router.navigate(['/security/login'])
      })
      console.log(this.captchap)
    } else {
      openConfirmationModal()
    }
  }

  /* RECAPTCHA VARIABLE Y FUNCION */
  captchap: string = null;
    
  resolved(captchaResponse: string) {
    this.captchap = captchaResponse
  }



}
