import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {
  // Puede recibir estos valores
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Yamcha',
      power: 2000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
