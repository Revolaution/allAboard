import {Component, OnInit} from 'angular2/core' 
import {RouteParams} from 'angular2/router' 
import {Http, HTTP_PROVIDERS} from 'angular2/http'; 

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `
  			<h1>{{title}}</h1>
  			<h2>{{hero.name}} Details!</h2>
  			<div>	
  				<label>id: </label>{{hero.id}}
			</div>
			<div>
				<label>name: </label>{{hero.name}}
				<input [(ngModel)]="hero.name" placeholder="name">
			</div>`
})

export class AppComponent { 
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}



