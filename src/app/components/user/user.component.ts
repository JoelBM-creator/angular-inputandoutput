import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input('data') user: any;

  @Output() borrarEvent = new EventEmitter<number>();

  constructor() {}

  borrarUser(id: number) {
    console.log('Usuario eliminado correctamente con ID: ' + id);
    this.borrarEvent.emit(id);
  }
}
