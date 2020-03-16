import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreatorComponent } from './admin-creator/admin-creator.component';
import { RolRequiredGuard } from 'src/app/helpers/guards/rol-required.guard';
import { GraphicsComponent } from './graphics/graphics.component';


const routes: Routes = [
{
path:'creator',
component:AdminCreatorComponent,
canActivate:[RolRequiredGuard]
},
{
  path:'graphs',
  component:GraphicsComponent,
  canActivate:[RolRequiredGuard]
  },
{
  path:'',
  pathMatch:'full',
  redirectTo:'creator'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
