import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdviserService } from 'src/app/services/adviser.service';
import { UserModel } from 'src/app/models/user.model';
import { LoginUserModel } from 'src/app/models/loginUser.model';

declare var initMaterializeSelect: any;
@Component({
  selector: 'app-adviser-editor',
  templateUrl: './adviser-editor.component.html',
  styleUrls: ['./adviser-editor.component.css']
})
export class AdviserEditorComponent implements OnInit {
  user= new UserModel;
  frmValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private adviserService : AdviserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

 

  ngOnInit() {
    this.formGenerator();
    this.getUserInfo();
  }

  ngAfterViewInit(){
    initMaterializeSelect()   
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      username: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', Validators.required],
    });
  }

  getUserInfo(){
    let id = this.route.snapshot.paramMap.get("id")
    this.adviserService.getUserById(id).subscribe((user: UserModel) => {
      this.fv.username.setValue(user.username),
      this.fv.email.setValue(user.email),
      this.fv.cellphone.setValue(user.cellphone),
      this.user=user
    });  
  }


  UpdateUser(){
    let u : UserModel = {
        username:this.fv.username.value,
        lastName:this.user.lastName,
        email :this.fv.email.value,
        cellphone: this.fv.cellphone.value,
        id:this.user.id,
        rol:"1"
        
    }
    
        this.adviserService.updateUser(u).subscribe();
        this.router.navigate(['/adviser/list'])
      }
    
 
  }




