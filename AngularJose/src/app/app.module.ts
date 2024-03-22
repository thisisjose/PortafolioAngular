import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ApiComponent } from './api/api.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component'
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortafolioComponent,
    ResumeComponent,
    ApiComponent,
    ProjectCardComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
