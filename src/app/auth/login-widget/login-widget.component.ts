import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../providers/authservice";

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.css']
})
export class LoginWidgetComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(public authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authSvc.loginWithGoogle().then((data) => {
    })
  }

}
