import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  RValidation: FormGroup;

  constructor(private rb: FormBuilder) { }

  ngOnInit() {
    this.RValidationBuilder();
  }

  RValidationBuilder() {
    this.RValidation = this.rb.group({

      firstname: ['', [Validators.required, Validators.maxLength(12)]],
      lastname: ['', [Validators.required, Validators.maxLength(12)]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]],
      phone: ['1234',[Validators.max(10),Validators.pattern('/^[0-9]$/')]]

    });
  }

  get rr() {

    return this.RValidation.controls;

  }


}
