import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './public/home/home.component';
import { AuthenticationRequiredGuard } from './helpers/guards/authentication-required.guard';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'security',
    loadChildren: './modules/security/security.module#SecurityModule'
  },
  {
    path: 'department',
    loadChildren: './modules/parameters/department/department.module#DepartmentModule' ,
    canActivate: [AuthenticationRequiredGuard]    
  },
  {
    path: 'city',
    loadChildren: './modules/parameters/city/city.module#CityModule' ,
    canActivate: [AuthenticationRequiredGuard]    
  },
  {
    path: 'inmueble',
    loadChildren: './modules/administrator/inmueble/inmueble.module#InmuebleModule' ,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
