import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  navbarStatus: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get getUsername() {
    return this.loginForm.controls['username'];
  }

  get getPassword() {
    return this.loginForm.controls['password'];
  }

  login(): void {
    if (this.getUsername.value && this.getPassword.value) {
      const token = this.getUsername.value + this.getPassword.value;
      localStorage.setItem('token', token);
      this.authService.setLoggedIn(true);
      this.router.navigate(['/']);
    }
  }
}
