import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmuebleCreatorComponent } from './inmueble-creator/inmueble-creator.component';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { InmuebleListComponent } from './inmueble-list/inmueble-list.component';


const routes: Routes = [
  {
    path: 'creator',
    component: InmuebleCreatorComponent
  },
  {
    path: 'editor',
    component: InmuebleEditorComponent
  },
  {
    path: 'list',
    component: InmuebleListComponent
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
