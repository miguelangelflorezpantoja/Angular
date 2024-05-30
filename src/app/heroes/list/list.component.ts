import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public registroEliminado?: string;
  public ListaHeroes: string[] = ['', 'b ', 'c', 'd'];


  deleteRegistro(): void {

    this.registroEliminado = this.ListaHeroes.pop();



  }
}
