import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { Todo } from '../../../../../models/Todo'
import { TodoService } from '../../service/todo.service'
import { ModalCreateTodoService } from '../../service/modal-create-todo.service'

@Component({
  selector: 'app-modal-create-todo',
  templateUrl: './modal-create-todo.component.html',
  styleUrls: ['./modal-create-todo.component.scss']
})
export class ModalCreateTodoComponent implements OnInit {
  private newTodo: Todo;
  public modalOpen: boolean = false;
  constructor(private todoService: TodoService, private modalCreateTodoService: ModalCreateTodoService) { }
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnInit() {
    this.clearForm()
    this.modalCreateTodoService.change.subscribe(state => this.modalOpen = state);
  }

  public clearForm() {
    this.newTodo = {
      _id: '',
      title: '',
      description: '',
      priority: '',
    }
  }

  public createTodo() {
    console.log('createTodo() ----------')
  }

  public toggleModal(state) {
    this.modalCreateTodoService.toggle(state);
  }

  public onSubmit() {
    this.todoService.addTodo(this.newTodo).subscribe(
      response => {
        const res = JSON.parse(response);
        if (res.success == true) {
          this.addTodo.emit(this.newTodo);
          this.clearForm()
        }
      }
    );
  }
}
