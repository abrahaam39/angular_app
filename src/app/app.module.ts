import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {FormsModule} from '@angular/forms';
import {Aboutservice} from '../services/about.service';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './project/project.component';
const routes : Routes = [
  {path:'',redirectTo:'/about',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Aboutservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
