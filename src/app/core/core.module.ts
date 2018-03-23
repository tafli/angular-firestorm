import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule {
}
