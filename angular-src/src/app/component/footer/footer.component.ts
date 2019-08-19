import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openCalendar() {
    console.log('openCalendar() ----')
  }

  public addTodo() {
    console.log('addTodo() ----')
  }

  public openCurrentTodos() {
    console.log('openCurrentTodos() ----')
  }

}
