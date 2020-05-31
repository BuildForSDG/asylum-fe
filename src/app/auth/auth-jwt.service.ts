import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SERVER_API_URL } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) {}
  getToken() {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }
  login(credentials: { email: any; password: any }): Observable<any> {
    const data = {
      email: credentials.email,
      password: credentials.password
      // rememberMe: credentials.rememberMe
    };
    return this.http
      .post('https://1829751f264a.ngrok.io/api/v1/auth/login/', data, { observe: 'response' }) // replace the endpoint
      .pipe(map(authenticateSuccess.bind(this)));
    function authenticateSuccess(resp: { body: any; }) {
      const bearerToken = resp.body.key;
      if (bearerToken) {
        const jwt = bearerToken;
        this.storeAuthenticationToken(jwt);
        return jwt;
      }
    }
  }
  loginWithToken(jwt: string) {
    if (jwt) {
      this.storeAuthenticationToken(jwt);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }
  private storeAuthenticationToken(jwt: string) {
   /*  if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    } */
    // this.$localStorage.store('authenticationToken', jwt);
    localStorage.setItem('authenticationToken', jwt);
  }
  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$localStorage.clear('authenticationToken');
     // this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
