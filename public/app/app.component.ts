import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService }     from './hero.service';
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
