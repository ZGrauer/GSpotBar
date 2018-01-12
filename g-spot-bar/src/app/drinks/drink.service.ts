import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Drink } from './drink.model';

@Injectable()
export class DrinkService {
  //private drinks: Drink[] = [
  //    new Drink('Nutcracker Ale', 'Beer', 'http://www.goebelliquor.com/images/beer/810/nutcracker%20ale.jpg', 'Seasonal from boulivard'),
  //    new Drink('Trappistes Rochefort 10', 'Beer', 'https://www.glunzbeers.com/wp-content/uploads/2017/03/usa-10-etiquette-novembre-2016-copie.jpg', 'Belgian Quad from Abbaye Notre-Dame de Saint-Rémy')
  // ];

  private drinks: Drink[] = [];

  drinkClicked = new EventEmitter<Drink>();

  constructor(private http: Http) { }

  getDrinks(getBeer:boolean) {
    // Cannot return "this.drinks" otherwise you return a reference to the private.
    //  Use slice to create a new copy of the array to return
    //return this.drinks.slice();   // Uses locally defined, hardcoded data

    // Get drink data from JSON file on server in assets folder
    var jsonPath: string = './assets/beer-data.json';

    if (getBeer) {
        jsonPath = './assets/beer-data.json';
    } else {
        jsonPath = './assets/booze-data.json';
    }

    return this.http.get(jsonPath)
      .toPromise()
      .then(res => <Drink[]>res.json().drinks)
      .then(data => { return data; });
  }
}
