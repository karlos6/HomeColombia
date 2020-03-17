import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { EmaiService } from 'src/app/services/emai.service';

declare let mensajeModalGenerico: any;
declare let mostrarMensajeDeError: any;

@Component({
  selector: 'app-adviser-creator',
  templateUrl: './adviser-creator.component.html',
  styleUrls: ['./adviser-creator.component.css']
})
export class AdviserCreatorComponent implements OnInit {

  RValidation: FormGroup;

  constructor(private rb: FormBuilder, private secSevice: SecurityService, private router: Router
    , private secEmai: EmaiService) { }

  ngOnInit() {
    this.RValidationBuilder();
  }

  /* VALIDACIONES */
  RValidationBuilder() {
    this.RValidation = this.rb.group({

      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]],
      phone: ['', [Validators.required]]

    });
  }

  /* OPTENER CONTROLES DE VALIDACIONES */
  get rr() {
    return this.RValidation.controls;
  }

  /* REGISTRO USUARIO */
  onRegister() {

    /* Validacion inicial registro de formulario*/
    if (this.RValidation.valid && this.captchap != null) {
      mensajeModalGenerico("Registrado correctamente");
      //mostrarMensajeDeError("carlos desde el alert");
      let c = new UserModel();

      c = {
        rol:"1",
        status:false,
        username: this.rr.username.value,
        lastName: this.rr.lastname.value,
        email: this.rr.email.value,
        password: this.rr.password.value,
        cellphone: this.rr.phone.value
      }
      
      this.secSevice.registerUser(c).subscribe(c => {
        console.log(c.email)
        this.secEmai.sendEmai("Estas son tus credenciales para iniciar sesión:"+'<br>'+ 
        "Username:"+" "+c.email+'<br>'+"Password:"+c.password,"Registro Asesor",c.email).subscribe(c=>{console.log(c)})
        
        this.router.navigate(['/adviser/list'])
      })

    } else if (this.RValidation.valid && this.captchap === null) {
      mostrarMensajeDeError("You forgot captchap validation ");
    }
    else if (this.RValidation.invalid && this.captchap != null) {
      mostrarMensajeDeError("the data is invalid");

    }
  }

  /* RECAPTCHA VARIABLE Y FUNCION */
  captchap: string = null;

  resolved(captchaResponse: string) {
    this.captchap = captchaResponse
  }
}
