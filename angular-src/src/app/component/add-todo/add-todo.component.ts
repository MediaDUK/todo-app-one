
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../../../models/Todo';
import { TodoService } from '../../service/todo.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  private newTodo: Todo;
  constructor(private todoServ: TodoService) { }

  ngOnInit() {
    this.newTodo = {
      _id: '',
      title: '',
      description: '',
      priority: '',
    }
  }

  public onSubmit() {
    this.todoServ.addTodo(this.newTodo).subscribe(
      (response: any) => {
        if (response.success == true) {
          //If success, update the view-list component
          console.log('response', response)

        }
      }
    );

  }
}