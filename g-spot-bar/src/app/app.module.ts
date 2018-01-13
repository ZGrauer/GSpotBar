import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinkListComponent } from './drinks/drink-list/drink-list.component';
import { ContactComponent } from './contact/contact.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AppRoutingModule } from './app-routing.module';

import {
  CarouselModule,
  DataTableModule,
  SharedModule,
  ButtonModule,
  InputTextModule,
  GrowlModule,
  CaptchaModule
} from 'primeng/primeng';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrinksComponent,
    DrinkListComponent,
    ContactComponent,
    EntertainmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CarouselModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    GrowlModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
