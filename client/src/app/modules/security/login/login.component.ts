import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare let mostrarMensajeDeError: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;
  badData: boolean;
  constructor(private fb: FormBuilder, private secService: SecurityService,
    private router: Router) {

  }

  ngOnInit() {
    this.fgValidationBuilder();
    this.badData=false;
    
  }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]]
    });
  }

  loginEvent() {
    
    if (this.fgValidation.invalid) {
      mostrarMensajeDeError("Invalid datA.");
    }else if(this.captchap === null){
      mostrarMensajeDeError("You forgot captchap validation");
    }else{
      let u = this.fg.username.value;
      let p = this.fg.password.value;

      this.secService.loginUser(u, p).subscribe(data => {

          this.router.navigate(['/home']);
          this.secService.saveLoginInfo(data);
          let token = data.id;
          
          this.secService.setToken(token);
       
        
      },
        (error) => {
         this.badData=true;
        }
      );


    }
    
  }


  get fg() {
    return this.fgValidation.controls;
  }
  
  captchap: string = null;

  resolved(captchaResponse: string) {
    this.captchap = captchaResponse
  }


}
