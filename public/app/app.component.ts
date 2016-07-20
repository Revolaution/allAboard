import {Component, OnInit} from 'angular2/core' 
import {RouteParams} from 'angular2/router' 
import {Http, HTTP_PROVIDERS} from 'angular2/http'; 

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} Details!</h2>'
})

export class AppComponent { 
	title = 'Tour of Heroes';
	hero = 'Windstorm'
}