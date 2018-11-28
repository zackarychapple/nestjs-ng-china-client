import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3000',
    }),
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
