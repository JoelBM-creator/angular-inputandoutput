import { Component, Host, Input } from '@angular/core';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input('data') user: any;

  constructor(@Host() private _app: AppComponent) {}

  borrarUser(id: number) {
    console.log('Usuario eliminado correctamente con ID: ' + id);
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id);
  }
}
