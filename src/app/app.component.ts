import { Component } from '@angular/core';
import { Hero } from "app/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
/*  template: `
    <h1>title</h1>
    <h2>My favourite hero is {{myhero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    new Hero(1, 'windstorm', 'power'),
    new Hero(13, 'Bambasto', 'power'),
    new Hero(15, 'Mangeta', 'power'),
    new Hero(20, 'Tornado', 'power')
  ]
  myhero = this.heroes[0];
  title = 'app';
}
