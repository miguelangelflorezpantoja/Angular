import { NgModule } from '@angular/core';
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from '@angular/common';





@NgModule({
  declarations:
    [
      ListComponent,
      HeroComponent
    ]

  ,
  exports:
    [
      ListComponent,
      HeroComponent
    ],
    imports:[


      CommonModule, //propio de Angular importarlo por el infor o engif
    ]

})
export class heroesModule {





}
