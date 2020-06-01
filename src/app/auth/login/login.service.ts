import { Injectable } from '@angular/core';

import { AccountService } from '../accout.service';
import { AuthServerProvider } from '../auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private accountService: AccountService,
    private authServerProvider: AuthServerProvider,
    private localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) {}
  login(credentials: any, callback?: () => void) {
    // tslint:disable-next-line: only-arrow-functions
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        (data: any) => {
          // this.accountService.identity(true).then((account) => {
          resolve(data);
          // });
          return cb();
        },
        (err: any) => {
          // this.logout();
          reject(err);
          return cb();
        }
      );
    });
  }
  /* loginWithToken(jwt: any) {
    return this.authServerProvider.loginWithToken(jwt);
  } */
  isLoggedIn() {
    return !!this.authServerProvider.getToken();
  }
  logout() {
    this.authServerProvider.logout().subscribe();
    this.$sessionStorage.clear('authenticationToken');
    this.localStorage.clear('authenticationToken');
    this.accountService.authenticate(null);
  }
}
