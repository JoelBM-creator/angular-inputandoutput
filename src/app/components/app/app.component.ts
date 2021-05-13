import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usuarios = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((datos: any[]) => (this.usuarios = datos));
  }

  borrarUser(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
  }
}
