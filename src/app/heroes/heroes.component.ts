import {Component, OnInit} from '@angular/core';
import {Hero} from 'src/app/Hero';
import {HeroService} from 'src/app/hero.service';
import {MessageService} from 'src/app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    console.log('heroService', heroService);
    console.log('messageService', messageService);
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
      if (this.selectedHero) {
        this.messageService.add(`HeroesComponent: Unselected ${this.selectedHero.name}`);
      }

      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected ${hero.name}`);
    } else {
      this.selectedHero = undefined;
      this.messageService.add(`HeroesComponent: Unselected ${hero.name}`);
    }
  }
}
