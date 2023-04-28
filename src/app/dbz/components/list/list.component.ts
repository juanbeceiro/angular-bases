import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];
 
  @Output()
 onDeleteId:EventEmitter<number> = new EventEmitter();


onDeleteCharacter(index:number):void{
  //TODO: Emitir el ID del personaje a borrar
  this.onDeleteId.emit(index);
  console.log({index});
}

}
