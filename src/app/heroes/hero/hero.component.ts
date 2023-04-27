import { Component } from '@angular/core';

@Component({
  // selector: 'app-hero',
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})

export class HeroComponent {
  name = 'Ironman';
  age = 25;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeName() {
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 50;
  }

  resetForm() {
    this.name="Ironman";
    this.age=25;
  }
}
