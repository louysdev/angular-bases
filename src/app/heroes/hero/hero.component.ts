import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  // Una propiedad que es un metodo
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'Wolverine';
  }

  changeAge(): void {
    this.age = 50;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
