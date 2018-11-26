import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SocketIoModule} from 'ngx-socket-io';
import {LoggerService} from './logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot({url: 'http://localhost:4200/api'})
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
