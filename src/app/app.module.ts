import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { SignInComponent } from './components/sign-in/sign-in.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JurorsDataComponent } from './components/jurors-data/jurors-data.component';
import { EventsComponent } from './components/events/events.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SummonJurorsComponent } from './components/summon-jurors/summon-jurors.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    NavbarComponent,
    JurorsDataComponent,
    EventsComponent,
    ProfileComponent,
    SummonJurorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
