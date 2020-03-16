import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './public/home/home.component';
import { ContactComponent } from './public/contact/contact.component';



const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
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
    loadChildren: './modules/parameters/department/department.module#DepartmentModule',
     
  },
  {
    path: 'city',
    loadChildren: './modules/parameters/city/city.module#CityModule',
      
  },
  {
    path: 'inmueble',
    loadChildren: './modules/administrator/inmueble/inmueble.module#InmuebleModule',
    
  },
  {
    path: 'administrator',
    loadChildren:'./modules/administrator/administrator.module#AdministratorModule'
  },
  {
    path: 'adviser',
    loadChildren:'./modules/adviser/adviser.module#AdviserModule'
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
