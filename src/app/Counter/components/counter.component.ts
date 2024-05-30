import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Contador: {{counter}} </h3>

<button (click)="incrementarValor(+1)">Sumar 1</button>
<button (click)="restablecer()">Restablecer</button>
<button (click)="incrementarValor(-1)">Restar 1</button>

  `
})

export class CounterComponent
  {

              public counter: number = 10;

              incrementarValor(value: number): void
              {

                this.counter += value;
              }

              restablecer(): void
              {
                this.counter = 1;
              }
  }
