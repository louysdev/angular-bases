import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false,
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Hola',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
