import {Component} from '@angular/core';
import {Usuario} from '../shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Social IFPB';
  aluno = 'Alecsander Camilo de Sousa Lima';
  usuario: Usuario;
  usuarios: Array<Usuario>;
  title: 'titulo';

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
