import {Component} from 'angular2/core';

// we use interface instead class, beacuse we don't need any method in it.
// if we needed some methods in it, we should use class instead interface.
interface Hero {
  id: number;
  name: string;
}

// This is metadata for class
@Component({
  // the place were we put template
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
    `
})
export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
