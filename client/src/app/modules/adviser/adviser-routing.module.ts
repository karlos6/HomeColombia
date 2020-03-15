import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviserListComponent } from './adviser-list/adviser-list.component';
import { AdviserEditorComponent } from './adviser-editor/adviser-editor.component';
import { AdviserCreatorComponent } from './adviser-creator/adviser-creator.component';
import { RolRequiredAdviserGuard } from 'src/app/helpers/guards/rol-required-adviser.guard';
const routes: Routes = [
  
  {
    path:'list',
    component:AdviserListComponent,
    canActivate:[RolRequiredAdviserGuard]
  },
  {
    path:'editor/:id',
    component:AdviserEditorComponent,
    canActivate:[RolRequiredAdviserGuard]
  },
  {
    path:'creator',
    component:AdviserCreatorComponent,
    canActivate:[RolRequiredAdviserGuard]
  },
  {
    path:'',
    redirectTo:'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
