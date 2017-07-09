import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from "app/click-me.component";
import { LittleTourComponent } from "app/little-four.component";
@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    LittleTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
