import { Component, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Drink } from './drink.model';
import { DrinkService } from './drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  providers: [DrinkService]
})
export class DrinksComponent implements OnInit {
  clickedDrink: Drink;

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
     this.drinkService.drinkClicked
        .subscribe(
            (drink:Drink) => {
                this.clickedDrink = drink;
                //console.log("received clicked for: " + this.clickedDrink.name);
            }
        );
  }

}
