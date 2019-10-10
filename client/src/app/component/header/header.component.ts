import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Todo App One';

  public menuOpen = false
  constructor() { }

  ngOnInit() {

  }

  animateHamburger() {

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }
}
