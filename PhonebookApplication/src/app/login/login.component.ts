import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  password:string = '';
  isValidLogin:boolean = true;
  errMsg: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  signin() {
    this.validate();
    if(!this.isValidLogin)
        return;
    this.handleAuthLogin();
  }

  validate() {
    if(this.userName === null || this.userName === '') {
      this.errMsg = 'Invalid Username';
      this.isValidLogin = false;
      return
    } else if(this.password === null || this.password === '') {
      this.errMsg = 'Invalid Password';
      this.isValidLogin = false;
      return;
    }
  }

  handleAuthLogin() {
      let authStatus = this.authService.authenticate(this.userName, this.password);

      if(authStatus) {
        this.router.navigate(['phonebook']);
        this.isValidLogin = true;
      } else {
        this.isValidLogin = false;
        this.errMsg = 'Invalid Password';
      }
  }


}
