import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number): void {
    // TODO: Emitir el id del personaje

    this.onDelete.emit(index);
    console.log('Evento emitido index del list component', index)
  }

}
