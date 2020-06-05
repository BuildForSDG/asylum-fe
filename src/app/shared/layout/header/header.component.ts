import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideHeader: boolean;
  loginStatus: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const auth = event.url.substring(0, 20);

      auth.toString().includes('/login') || auth.toString().includes('/reset-finish') ? this.hideHeader = true :
      (auth.toString().includes('/reset-password')) ? this.hideHeader = true : this.hideHeader = false;
      if (localStorage.getItem('authenticationToken')) {
        this.loginStatus = 'Sign out';
      } else {
        this.loginStatus = 'Sign in';
      }
  });
  }
  toggleLogin() {
    if (this.loginStatus === 'Sign in') {
      this.router.navigate(['/login']);
    }
  }
}
