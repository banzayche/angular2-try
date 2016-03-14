// import of components
import {Component} from 'angular2/core';
import {Hero} from './hero'

// This is a metadata for class below.
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: <i>Hero.name:</i> {{myHero.name}}, <i>Hero.id:</i> {{myHero.id}}</h2>
    
    <button (click)=checkEvent()>Check the event of adding</button>
    
    <p>Heroes:</p>
    <ul>
      <li *ngFor="#hero of heroes">
        {{ hero.name }}
        </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})

// Class that we want to export from this file.
export class AppComponent {
  title = 'Tour of Heroes';

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  // Look at the template to see how method is called.
  checkEvent() {
    console.log('Hero is added');
  };

  myHero = this.heroes[0];  
}
