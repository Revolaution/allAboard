import {Component, Input} from 'angular2/core' 
import {RouteParams} from 'angular2/router' 
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import { Hero } from './hero'

@Component({
  selector: 'my-hero-detail',
  template: `
		  <div *ngIf="hero">
		    <h2>{{hero.name}} details!</h2>
		    <div><label>id: </label>{{hero.id}}</div>
		    <div>
		      <label>name: </label>
		      <input [(ngModel)]="hero.name" placeholder="name"/>
		    </div>
		  </div>
			`
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}