import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/city.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/department.model';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  p: number =1;
  
  codeToRemove:  String;
  constructor(private cityService : CityService,
    private deptService : DepartmentService) { }

  private cities : CityModel;

  ngOnInit() {
    this.getListCity()
  }

  getListCity(){
    this.cityService.getAllCities()
    .subscribe((cities : CityModel) => (this.cities = cities));
    
  }


  openConfirmation(code: String){
    this.codeToRemove =  code;
    openConfirmationModal()
   
  }

  DeleteCity() {
    this.cityService.deleteCity(this.codeToRemove).subscribe();
    setTimeout(() => {      
    this.getListCity()
     }, 500)
     console.log("eliminado")
  }
}
