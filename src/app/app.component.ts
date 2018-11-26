import {Component} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nest-ng-china-client';

  constructor(private logger: LoggerService) {

  }

  logClick() {
    this.logger.sendMessage('omg');
  }
}
