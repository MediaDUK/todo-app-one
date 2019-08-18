import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Todo App One';

  menuOpen = false;
  constructor() { }

  ngOnInit() {
  }

  animateHamburger(open: boolean) {
    console.log(`Menu is open: ${open}`);
    if (open) {

    } else {

    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen
    this.animateHamburger(this.menuOpen)
  }

}
