import { Component } from '@angular/core';
import { TwitterService } from './service/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})
export class AppComponent {

}
