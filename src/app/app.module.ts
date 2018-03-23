import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
