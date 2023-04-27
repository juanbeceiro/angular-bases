import { Component } from '@angular/core';

@Component({
  // selector: 'app-list',
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  deletedHeroe?: string;
  heroes: string[] = ['Superman', 'Spiderman', 'Waterman', 'Peman', 'Hulk'];

  deleteLastHeroe() {
    this.deletedHeroe = this.heroes.pop();
  }
}
