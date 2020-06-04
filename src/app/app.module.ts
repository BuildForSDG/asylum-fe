import { LocalStorageService, SessionStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { AuthServerProvider } from './shared/services/auth/auth-jwt.service';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { AccountService } from './shared/services/auth/accout.service';
import { StateStorageService } from './shared/services/auth/state-storage.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    NgbModule],
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
