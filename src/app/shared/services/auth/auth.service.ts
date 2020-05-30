import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private http: HttpClient) { }
  register(formValues: any): Observable<any> {
      return this.http.post('https://963df339618d.ngrok.io/api/v1/auth/register/', formValues, {observe: 'response'});
  }
  login(loginValues: any) {
    return this.http.post('https://963df339618d.ngrok.io/api/v1/auth/login/',
      loginValues, { observe: 'response' }).subscribe(response => {
       console.log(response);
      });
  }
  getToken() {
    return this.token;
}

}
