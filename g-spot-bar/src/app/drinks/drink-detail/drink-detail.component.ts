import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink.model';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {
  @Input() drink: Drink;
  constructor() { }

  ngOnInit() {
  }

}
