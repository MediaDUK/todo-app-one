import { Component, OnInit } from '@angular/core';
import { ModalCreateTodoService } from "../../service/modal-create-todo.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalCreateTodoService: ModalCreateTodoService) { }
  ngOnInit() { }

  public openCalendar() {
    console.log('openCalendar() ----')
  }

  public openCreateTodoModal() {
    this.modalCreateTodoService.toggle(true);
  }

  public openCurrentTodos() {
    console.log('openCurrentTodos() ----')
  }
}
