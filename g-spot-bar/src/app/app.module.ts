import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinkListComponent } from './drinks/drink-list/drink-list.component';
import { DrinkItemComponent } from './drinks/drink-item/drink-item.component';
import { DrinkDetailComponent } from './drinks/drink-detail/drink-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrinksComponent,
    DrinkListComponent,
    DrinkItemComponent,
    DrinkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
