import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

// This is metadata for class
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls: ['app/templates/heroes.component.css'],
  //for another components to add into DOM
  directives: [HeroDetailComponent],
  // for services registration
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates a new
  // HeroesComponent. The HeroesComponent can use that service to get heroes and so can every child component of its
  // component tree.
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  // to add new _heroService property and identifies it as a HeroService injection
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    // or we can use slow mode:)
    // this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // do something when initialize
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}