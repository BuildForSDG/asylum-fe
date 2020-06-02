import { Component, OnInit, Input } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideHeader: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const login = event.url.substring(0, 10);
      this.hideHeader = !login.toString().includes('/login');
  });
  }
}
