import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  success: boolean;
  error: any;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.email = new FormControl('', [Validators.required, Validators.email]),
      password: this.password = new FormControl('', Validators.required)
    });
  }
  login(formValues) {
    this.authService.login(formValues);
  }
  onError() {
    setTimeout(() => {
      this.error = undefined;
    }, 5000);
  }

}
