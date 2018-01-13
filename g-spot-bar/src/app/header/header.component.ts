import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'The G Spot Bar';
  logoPath: string = './assets/Logomakr_2oVFzE.png';
  activePage: string;

  constructor() { }

  ngOnInit() {
      this.activePage='home';
  }

  onSelect(page: string) {
    this.activePage = page;
  }
}
