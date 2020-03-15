import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisSolicitudesListComponent } from './mis-solicitudes-list/mis-solicitudes-list.component';
import { CodeudorComponent } from './codeudor/codeudor.component';


const routes: Routes = [
  {
    path: 'list',
    component: MisSolicitudesListComponent
  },
  {
    path: 'codeudor',
    component: CodeudorComponent
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
export class MisSolicitudesRoutingModule { }
