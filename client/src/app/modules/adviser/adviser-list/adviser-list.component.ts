import { Component, OnInit } from '@angular/core';
import { AdviserService } from 'src/app/services/adviser.service';
import { UserModel } from 'src/app/models/user.model';
import { LoginUserModel } from 'src/app/models/loginUser.model';
declare var openConfirmationModal: any;
@Component({
  selector: 'app-adviser-list',
  templateUrl: './adviser-list.component.html',
  styleUrls: ['./adviser-list.component.css']
})
export class AdviserListComponent implements OnInit {

  p: number =1;
  
  codeToRemove:  String;
  constructor(private adviserService: AdviserService) { }
  users: UserModel[];
   ngOnInit() {
     this.getListUser();
     console.log(this.users)
   }


   getListUser(){
  
    this.adviserService.getAllUsers().subscribe((data) => {
      this.users = data
    });

   }

  openConfirmation(code: String){
    this.codeToRemove =  code;
    openConfirmationModal()
   
  }

  DeleteCity() {
    this.adviserService.deleteUser(this.codeToRemove).subscribe();
    setTimeout(() => {      
    this.getListUser()
     }, 1000)
  }
}
