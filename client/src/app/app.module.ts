import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './public/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalHttpRequestInterceptorServiceService } from 'src/app/services/global-http-request-interceptor-service.service';
import { ContactComponent } from './public/contact/contact.component';
import {NgxPaginationModule}  from 'ngx-pagination';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (router: Router) {
        return new GlobalHttpRequestInterceptorServiceService(router);
      },
      multi: true,
      deps: [Router]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
