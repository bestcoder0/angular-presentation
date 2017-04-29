import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import {AuthService} from "../providers/authservice";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginWidgetComponent],
  exports: [LoginWidgetComponent],

  providers: [AuthService]
})
export class AuthModule { }
