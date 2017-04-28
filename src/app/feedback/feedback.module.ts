import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { FeedbackWidgetComponent } from './feedback-widget/feedback-widget.component';

const firebaseConfig = {
  apiKey: "AIzaSyCeP6gN-uuk6Ltzs5d0_pRqcw0nzbK9aJI",
  authDomain: "ng2codelab.firebaseapp.com",
  databaseURL: "https://ng2codelab.firebaseio.com",
  storageBucket: "ng2codelab.appspot.com"
};

export const af = AngularFireModule.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    CommonModule,
    af,
    FormsModule
  ],
  providers:[
    AngularFire
  ],
  declarations: [FeedbackWidgetComponent],
  exports:[FeedbackWidgetComponent]
})
export class FeedbackModule {

}
