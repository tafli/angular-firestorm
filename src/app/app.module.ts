import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {CoreModule} from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './core/auth.guard';


var firebaseConfig = {
  apiKey: 'AIzaSyDO6QQiypQJdaI2jFy1pMYgqFNl7AYU8nA',
  authDomain: 'angular-firebase-f577b.firebaseapp.com',
  databaseURL: 'https://angular-firebase-f577b.firebaseio.com',
  projectId: 'angular-firebase-f577b',
  storageBucket: 'angular-firebase-f577b.appspot.com',
  messagingSenderId: '955344340638'
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
