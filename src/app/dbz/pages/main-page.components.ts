import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krillin',
      power: 1000 },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Hulk',
      power: 2000,
    },
    {
      name: 'Pickachu',
      power: 12000,
    },
  ];
}
