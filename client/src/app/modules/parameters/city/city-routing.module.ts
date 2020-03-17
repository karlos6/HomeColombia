import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { CityListComponent } from './city-list/city-list.component';
import { RolRequiredGuard } from 'src/app/helpers/guards/rol-required.guard';


const routes: Routes = [
  {
    path: 'creator',
    component: CityCreatorComponent,
    canActivate:[RolRequiredGuard]
  },
  {
    path: 'editor/:id',
    component: CityEditorComponent,
    canActivate:[RolRequiredGuard]
  },
  {
    path: 'list',
    component: CityListComponent,
    canActivate:[RolRequiredGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
