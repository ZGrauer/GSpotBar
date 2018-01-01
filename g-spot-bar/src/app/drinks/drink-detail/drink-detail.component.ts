import { Component, Input } from '@angular/core';
import { Drink } from '../drink.model';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent {
  @Input() drink: Drink;

  constructor(private drinkService:DrinkService) { }

}
