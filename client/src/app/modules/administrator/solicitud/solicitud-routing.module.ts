import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { DecisionComponent } from './decision/decision.component';
import { SetAsesorComponent } from './set-asesor/set-asesor.component';
import { RolRequiredGuard } from 'src/app/helpers/guards/rol-required.guard';


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
    path:'setAdviser/:id',
    component:SetAsesorComponent,
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
export class SolicitudRoutingModule { }
