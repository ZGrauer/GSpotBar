import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'The G Spot Bar';
  activePage: string;

  constructor() { }

  ngOnInit() {
      this.activePage='home';
  }

  onSelect(page: string) {
    this.activePage = page;
  }
}
