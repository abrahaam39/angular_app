import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectComponent} from './project/project.component';


const routes: Routes = [
  {path:'',redirectTo:'/about',pathMatch : 'full'},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
