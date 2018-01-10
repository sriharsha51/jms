import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { SignInComponent } from './components/sign-in/sign-in.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JurorsDataComponent } from './components/jurors-data/jurors-data.component';
import { EventsComponent } from './components/events/events.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SummonJurorsComponent } from './components/summon-jurors/summon-jurors.component';
import { HomeComponent } from './components/home/home.component';
import { ViewEventComponent } from './components/events/view-event/view-event.component';
import { RegisterComponent } from './components/sign-in/register/register.component';
import { CreateEventComponent } from './components/events/create-event/create-event.component';

import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';






@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    NavbarComponent,
    JurorsDataComponent,
    EventsComponent,
    ProfileComponent,
    SummonJurorsComponent,
    ViewEventComponent,
    RegisterComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
