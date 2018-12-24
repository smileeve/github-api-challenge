import { Component } from '@angular/core';

import {GithubService} from 'src/app/core/services/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'github-api-test';
}
