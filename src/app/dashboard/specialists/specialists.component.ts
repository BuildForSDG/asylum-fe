import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {
users = [{
  pk: 1,
  username: 'admin',
  email: 'admin@example.com',
  first_name: 'Admin',
  last_name: 'Root',
  avatar: 'http://810219b18a4c.ngrok.io/api/v1/users/avatars/2020/05/Screenshot.png',
  gender: 'male',
  managed_account: false,
  age: 42,
  is_patient: true
}, {
  pk: 2,
  username: 'admin',
  email: 'admin@example.com',
  first_name: 'Admin',
  last_name: 'Root',
  avatar: 'http://810219b18a4c.ngrok.io/api/v1/users/avatars/2020/05/Screenshot.png',
  gender: 'male',
  managed_account: false,
  age: 42,
  is_patient: true
}];
  constructor() { }

  ngOnInit(): void {
  }

}
