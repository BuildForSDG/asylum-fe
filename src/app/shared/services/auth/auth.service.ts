import { SERVER_API_URL } from '../../../app.constants';
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
      return this.http.post( SERVER_API_URL + 'api/v1/auth/register/', formValues, {observe: 'response'});
  }
  login(loginValues: any) {
    return this.http.post( SERVER_API_URL + 'api/v1/auth/login/',
      loginValues, { observe: 'response' }).subscribe(response => {
       console.log(response.body);
      });
  }
  getToken() {
    return this.token;
}

}
