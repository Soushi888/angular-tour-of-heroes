import {Component, OnInit} from '@angular/core';
import {Hero} from 'src/app/Hero';
import {HeroService} from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

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
