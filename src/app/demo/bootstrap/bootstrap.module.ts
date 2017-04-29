import {NgModule} from '@angular/core';
import {BootstrapComponent} from './bootstrap.component';
import {RouterModule} from '@angular/router';
import {SlidesRoutes} from '../../presentation/slide-routes';

import {ExerciseModule} from '../../exercise/exersice.module';
import {PresentationModule} from '../../presentation/presentation.module';
import {FeedbackModule} from "../../feedback/feedback.module";
import {BrowserWindowModule} from '../../browser-window/browser-window.module';
import {AuthModule} from '../../auth/auth.module';

const routes = RouterModule.forChild(
  SlidesRoutes.get(BootstrapComponent)
);

@NgModule({
  imports: [routes, PresentationModule, ExerciseModule, BrowserWindowModule, FeedbackModule, AuthModule],
  declarations: [BootstrapComponent],
  exports: [BootstrapComponent]
})
export class BootstrapModule {

}
