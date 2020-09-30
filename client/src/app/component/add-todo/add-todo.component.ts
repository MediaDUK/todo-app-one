import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../../../../models/Todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"],
})
export class AddTodoComponent implements OnInit {
  private newTodo: Todo;
  constructor(private todoServ: TodoService) {}

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnInit() {
    this.clearForm();
  }

  public clearForm() {
    this.newTodo = {
      _id: "",
      title: "",
      description: "",
      priority: "",
    };
  }

  public onSubmit() {
    this.todoServ.addTodo(this.newTodo).subscribe((response) => {
      const res = JSON.parse(response);
      console.log(res);
      if (res.success == true) {
        this.addTodo.emit(this.newTodo);
        this.clearForm();
      }
    });
  }
}
