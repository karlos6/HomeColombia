import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

declare var openHCModalMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb:FormBuilder, private secService: SecurityService,
    private router: Router) { 

  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(15)]]
    });
  }

  loginEvent(){
    
    if(this.fgValidation.invalid){
      alert("Invalid date.");
    }else{
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      console.log(u)
      console.log(p)
      this.secService.loginUser(u, p).subscribe(data =>{
        if(data != null){
          console.log(data);
          this.router.navigate(['/home']);
          this.secService.saveLoginInfo(data);
        }else{
          openHCModalMessage("Data is not valid!")
        }
      });
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }


}
