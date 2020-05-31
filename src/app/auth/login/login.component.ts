import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { StateStorageService } from 'src/app/shared/services/auth/state-storage.service';
import { AccountService } from '../accout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  authenticationError: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private accountService: AccountService,
    private stateStorageService: StateStorageService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.email = new FormControl('', [Validators.required, Validators.email]),
      password: this.password = new FormControl('', Validators.required)
    });
  }
  login(formValues: any) {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService
      .login(formValues)
      .then(() => {
        this.authenticationError = false;
        this.router.navigate(['/patient']);
        /* if (
          this.router.url === '/register' ||
          /^\/activate\//.test(this.router.url) ||
          /^\/reset\//.test(this.router.url)
        ) {
          this.accountService.hasAuthority('ROLE_USER').then((role) => {
            role ? this.router.navigate(['patient']) : this.router.navigate(['doctor']);
          });
        }
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
            this.stateStorageService.storeUrl(null);
            this.router.navigate([redirect]);
        } else {
            this.accountService.hasAuthority('ROLE_USER').then(role => {
                role ? this.router.navigate(['patient']) : this.router.navigate(['doctor']);
            });
        } */
      })
      .catch((err) => {
        this.authenticationError = true;
        console.log(err);
      });
  }
}
