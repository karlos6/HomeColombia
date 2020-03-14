import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviserListComponent } from './adviser-list/adviser-list.component';
import { AdviserEditorComponent } from './adviser-editor/adviser-editor.component';
import { AdviserCreatorComponent } from './adviser-creator/adviser-creator.component';
const routes: Routes = [
  
  {
    path:'list',
    component:AdviserListComponent
  },
  {
    path:'editor/:id',
    component:AdviserEditorComponent
  },
  {
    path:'creator',
    component:AdviserCreatorComponent
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
