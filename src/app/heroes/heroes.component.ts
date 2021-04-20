import {Component} from '@angular/core';
import {HEROES} from 'src/app/mock-heroes';
import {Hero} from 'src/app/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  /**
   * Toggle description of an Hero
   */
  onSelect(hero: Hero): void {
    if (hero !== this.selectedHero) {
      this.selectedHero = hero;
    } else {
      this.selectedHero = undefined;
    }
  }
}
