import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{titulo}} </h1>
    <h3> La base es {{Base}} </h3>
    <button (click)="acumular(-Base)">Restar {{Base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(Base)">Sumar {{Base}} </button>
    <button (click)="cero()">0</button>
    `,
})
export class ContadorComponent {
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