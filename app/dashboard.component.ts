import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/templates/dashboard.component.html',
	styleUrls: ['app/templates/dashboard.component.css']
})
export class DashboardComponent { 
	heroes: Hero[] = [];

	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}

	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	// set a route link parameters array
	// pass the array to the router's navigate method.
	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}
