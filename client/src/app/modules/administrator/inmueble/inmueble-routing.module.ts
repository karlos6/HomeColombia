import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmuebleCreatorComponent } from './inmueble-creator/inmueble-creator.component';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { InmuebleListComponent } from './inmueble-list/inmueble-list.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';


const routes: Routes = [
  {
    path: 'creator',
    component: InmuebleCreatorComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: 'editor/:id',
    component: InmuebleEditorComponent
  },
  {
    path: 'list',
    component: InmuebleListComponent,
    canActivate: [AuthenticationRequiredGuard]
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
export class InmuebleRoutingModule { }
