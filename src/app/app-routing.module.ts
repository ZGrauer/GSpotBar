import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'drinks', component: DrinksComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
