import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
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

  addNewCharacter(character: Character): void {
    console.log("MainPage");
    console.log(character);
    this.characters.push(character);
  }

  deleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
}
