import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink.model';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css']
})
export class DrinkItemComponent implements OnInit {
    @Input() drink: Drink;

  constructor(private drinkService:DrinkService) { }

  ngOnInit() {
  }

  onClicked() {
      this.drinkService.drinkClicked.emit(this.drink);
      //console.log("Drink item emitting " + this.drink.name);
  }
}
