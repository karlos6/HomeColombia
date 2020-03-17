import { Component, OnInit } from '@angular/core';
import { GraphicsService } from 'src/app/services/graphics.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(private graphService:GraphicsService) { }
users:UserModel[];
 size:number;

  ngOnInit() {
        this.getListUser()
  }
  getListUser(){
  
    this.graphService.getAllUsers().subscribe((data) => {
      this.users = data,
      this.size=data.length
    });

   }
}
