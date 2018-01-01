import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink.model';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
    drinks: Drink[];

  constructor(private drinkService:DrinkService) { }

  ngOnInit() {
      this.drinks = this.drinkService.getDrinks();
  }

  
}
