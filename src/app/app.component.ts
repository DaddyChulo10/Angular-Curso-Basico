import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Base: number = 5
  titulo: string = 'Contador App';
  numero: number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }
  cero() {
    this.numero = 0
  }
}
