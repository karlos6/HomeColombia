import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCreatorComponent } from './department-creator/department-creator.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEditorComponent } from './department-editor/department-editor.component';
import { RolRequiredGuard } from 'src/app/helpers/guards/rol-required.guard';


const routes: Routes = [
  {
    path: 'creator',
    component: DepartmentCreatorComponent,
    canActivate:[RolRequiredGuard]
  },
  {
    path: 'list',
    component: DepartmentListComponent,
    canActivate:[RolRequiredGuard]
  },
  {
    path: 'editor/:id',
    component: DepartmentEditorComponent,
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
export class DepartmentRoutingModule { }
