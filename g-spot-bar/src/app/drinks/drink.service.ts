import { Injectable, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Injectable()
export class DrinkService {
  private drinks: Drink[] = [
    new Drink('Nutcracker Ale', 'Beer', 'http://www.goebelliquor.com/images/beer/810/nutcracker%20ale.jpg', 'Seasonal from boulivard'),
    new Drink('Trappistes Rochefort 10', 'Beer', 'https://www.glunzbeers.com/wp-content/uploads/2017/03/usa-10-etiquette-novembre-2016-copie.jpg', 'Belgian Quad from Abbaye Notre-Dame de Saint-Rémy')
  ];

  drinkClicked = new EventEmitter<Drink>();

  constructor() { }

  getDrinks() {
      // Cannot return "this.drinks" otherwise you return a reference to the private.
      //  Use slice to create a new copy of the array to return
      return this.drinks.slice();
  }
}
