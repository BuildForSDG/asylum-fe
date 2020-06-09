import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDisorder } from '../../models/disorder.models';

@Injectable({
  providedIn: 'root'
})
export class DisordersService {

  private endpoint = 'http://asylum-staging.herokuapp.com/api/v1/disorders/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IDisorder[]>(this.endpoint);
  }

  getOne(id: number) {
    const url = `${this.endpoint}${id}/`;
    return this.http.get<IDisorder>(url);
  }
}
