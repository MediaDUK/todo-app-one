import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../../../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos: Todo[] = [];
  constructor(private todoServ: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  public onAddTodo(newTodo) {
    this.todos = this.todos.concat(newTodo);
    this.loadTodos();
  }

  public loadTodos() {
    this.todoServ.getAllTodos().subscribe(res => this.todos = res)
  }

  public deleteTodo(todo: Todo) {
    this.todoServ.deleteTodo(todo._id).subscribe(
      response => this.todos = this.todos.filter(todos => todos !== todo))
  }
}



