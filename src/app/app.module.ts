import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { counterModule } from './Counter/components/counter/counter.module';
import { heroesModule } from './heroes/heroesModule.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    heroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
