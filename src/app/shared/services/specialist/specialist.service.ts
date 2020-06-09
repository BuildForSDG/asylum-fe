import { Injectable } from '@angular/core';
const USERS = [
  {
    pk: 1,
    username: 'admin',
    email: 'admin@example.com',
    first_name: 'Admin',
    last_name: 'Root',
    avatar: 'https://picsum.photos/200/300',
    gender: 'male',
    managed_account: false,
    age: 42,
    is_patient: true
  },
  {
    pk: 2,
    username: 'Boo',
    email: 'bar@example.com',
    first_name: 'Boo',
    last_name: 'Bar',
    avatar: 'https://picsum.photos/200/300',
    gender: 'male',
    managed_account: false,
    age: 42,
    is_patient: true
  }
];

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  getUsers(): any {
    return USERS;
  }
  getEvent(id: number): any {
    return USERS.find((user) => user.pk === id);
  }

  constructor() {}
}
