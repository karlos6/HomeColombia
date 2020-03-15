import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { DecisionComponent } from './decision/decision.component';


const routes: Routes = [
  {
    path: 'list',
    component: SolicitudListComponent
  },
  {
    path: 'decision/:id',
    component:  DecisionComponent
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
export class SolicitudRoutingModule { }
