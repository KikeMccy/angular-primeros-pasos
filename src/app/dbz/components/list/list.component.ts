import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { first } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trukns',
    power: 10
  }];

  @Output()
public onDelete: EventEmitter<string> = new EventEmitter();


onDeleteCharacter(id?: string): void{
  //TODO Emitir el ID del personaje
  if ( !id) return;
console.log(id);

 this.onDelete.emit(id);
}

 }
