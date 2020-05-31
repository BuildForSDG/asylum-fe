import { LocalStorageService, SessionStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { AccountService } from './auth/accout.service';
import { StateStorageService } from './shared/services/auth/state-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, DashboardModule, AuthModule, HttpClientModule, NgxWebstorageModule.forRoot()],
  providers: [
    AuthService,
    AuthServerProvider,
    AccountService,
    StateStorageService,
    LocalStorageService,
    SessionStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
