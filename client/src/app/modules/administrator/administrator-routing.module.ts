import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreatorComponent } from './admin-creator/admin-creator.component';
import { RolRequiredGuard } from 'src/app/helpers/guards/rol-required.guard';


const routes: Routes = [
{
path:'creator',
component:AdminCreatorComponent,
canActivate:[RolRequiredGuard]
},
{
  path:'',
  pathMatch:'full',
  redirectTo:'/departament'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
