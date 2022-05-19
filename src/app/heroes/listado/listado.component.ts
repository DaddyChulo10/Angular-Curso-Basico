import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spider', 'Iron', 'Hulk', 'Thor', 'Capitan'];
  heroesBorrado: string = '';
  borrarHeroe() {
    this.heroesBorrado = this.heroes.shift() || '';
  }

}
