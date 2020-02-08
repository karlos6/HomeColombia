import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb:FormBuilder) { 

  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      username: ['admin', [Validators.required, Validators.minLength(5), Validators.maxLength(40),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern("") ]]
    });
  }

  loginEvent(){
    if(this.fgValidation.invalid){
      alert("Invalid date.");
    }else{
      alert("go to login");
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }


}
