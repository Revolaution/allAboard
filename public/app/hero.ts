import {Component, OnInit} from 'angular2/core' 
import {RouteParams} from 'angular2/router' 
import {Http, HTTP_PROVIDERS} from 'angular2/http'

export class Hero {
	id: number;
	name: string;
}