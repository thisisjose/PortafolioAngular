import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'portafolio', component: PortafolioComponent},
  {path:'resume', component: ResumeComponent},
  {path:'api', component: ApiComponent},
  {path:'**', component: HomeComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
