import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmuebleCreatorComponent } from './inmueble-creator/inmueble-creator.component';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { InmuebleListComponent } from './inmueble-list/inmueble-list.component';
import { InmuebleViewComponent } from './inmueble-view/inmueble-view.component';


const routes: Routes = [
  {
    path: 'creator',
    component: InmuebleCreatorComponent
  },
  {
    path: 'editor/:id',
    component: InmuebleEditorComponent
  },
  {
    path: 'list',
    component: InmuebleListComponent
  },
  {
    path: 'view/:id',
    component: InmuebleViewComponent
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
