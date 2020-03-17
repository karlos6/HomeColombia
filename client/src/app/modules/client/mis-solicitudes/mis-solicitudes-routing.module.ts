import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisSolicitudesListComponent } from './mis-solicitudes-list/mis-solicitudes-list.component';
import { CodeudorComponent } from './codeudor/codeudor.component';
import { ContratoComponent } from './contrato/contrato.component';


const routes: Routes = [
  {
    path: 'list',
    component: MisSolicitudesListComponent
  },
  {
    path: 'codeudor/:id',
    component: CodeudorComponent
  },
  {
    path: 'contrato/:id',
    component: ContratoComponent
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
