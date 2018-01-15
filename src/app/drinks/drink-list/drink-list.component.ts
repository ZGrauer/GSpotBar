import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink.model';
import { DrinkService } from '../drink.service';



@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
    // Initialize Beer to 2 to match eventual JSON.
    // Set booze to multiple pages.  otherwise the controls don't update with data from service
  beers: Drink[] = [new Drink('', '', '', '', '', 0), new Drink('', '', '', '', '', 0)];
  booze: Drink[] = [new Drink('', '', '', '', '', 0),
  new Drink('', '', '', '', '', 0),
  new Drink('', '', '', '', '', 0),
  new Drink('', '', '', '', '', 0),
  new Drink('', '', '', '', '', 0),
  new Drink('', '', '', '', '', 0)
  ];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    //this.drinks = this.drinkService.getDrinks();
    this.drinkService.getDrinks(true).then(drinks => this.beers = drinks);
    this.drinkService.getDrinks(false).then(drinks => this.booze = drinks);
  }


}
