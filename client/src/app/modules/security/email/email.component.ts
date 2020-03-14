import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmaiService } from 'src/app/services/emai.service';
import { Router } from '@angular/router';
declare let mensajeModalGenerico: any;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  CValidation: FormGroup;

  constructor(private br: FormBuilder, private secEmail: EmaiService, private root:Router) { }

  ngOnInit() {
    this.CValidationBuilder()
  }

  CValidationBuilder() {
    this.CValidation = this.br.group({
      affair: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      message: ["", [Validators.required, Validators.minLength(30), Validators.maxLength(120)]]
    });
  }

  get rr(){
    return this.CValidation.controls;
  }

  /* Envio datos para enviar un gmail del services emai metodo endEmai() */
  sendDataEmail(){
    this.secEmail.sendEmai(this.rr.message.value,this.rr.affair.value,
      "elpotrodelcharco@gmail.com").subscribe(c =>{
        mensajeModalGenerico("You message was send");
        this.root.navigate(['/home']);
      });

  }





}
