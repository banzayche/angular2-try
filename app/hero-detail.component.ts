import { Component, OnInit } from 'angular2/core';
import {Hero} from './hero';

import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/templates/hero-detail.component.html',
	styleUrls: ['app/templates/hero-detail.component.css'],
	inputs: ['hero']
})

export class HeroDetailComponent {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		// router params is olways string, so we should to convert it into nuber using '+'
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}