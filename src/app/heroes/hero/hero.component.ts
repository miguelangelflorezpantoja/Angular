import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 15;


  get capitalizedName(): string {

    return this.name.toUpperCase();

  }

  getHeroDescription(): string {


    return `${this.name}- ${this.age}`;
  }

  changeHero(): void {

    this.name = 'Jhosep';

  }
  changeAge(): void {

    this.age = 99;


  }
  changeReset():void{


    this.age = 15;
    this.name = 'ironman';
  }


}
