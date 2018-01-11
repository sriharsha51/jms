import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { JurorsDataComponent } from "./components/jurors-data/jurors-data.component";
import { EventsComponent } from "./components/events/events.component";
import { SummonJurorsComponent } from "./components/summon-jurors/summon-jurors.component";
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'home', component:HomeComponent},
    { path: 'sign-in', component:SignInComponent},
    { path: 'profile', component:ProfileComponent, canActivate:[ AuthGuardService ]}, 
    { path: 'jurors-data', component:JurorsDataComponent, canActivate:[ AuthGuardService ]},
    { path: 'events', component:EventsComponent, canActivate:[ AuthGuardService ]},
    { path: 'summon-jurors', component:SummonJurorsComponent, canActivate:[ AuthGuardService ]},
    { path: '**', component:HomeComponent }
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
  })
export class AppRoutingModule {

}