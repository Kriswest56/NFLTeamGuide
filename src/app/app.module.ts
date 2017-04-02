import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { TeamDetailComponent } from './team-detail.component';
import { TeamComponent } from './teams.component';
import { TeamService } from './team.service';
import {DashboardComponent} from "./dashboard.component";

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamDetailComponent,
    TeamComponent
  ],
  providers: [
    TeamService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

}
