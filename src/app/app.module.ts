import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickMeComponent } from "app/click-me.component";
import { LittleTourComponent } from "app/little-four.component";
import { HeroFormComponent } from "app/hero-form.component";
import { LoopbackComponent } from "app/look-back.component,";
@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    LittleTourComponent,
    HeroFormComponent,
    LoopbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
