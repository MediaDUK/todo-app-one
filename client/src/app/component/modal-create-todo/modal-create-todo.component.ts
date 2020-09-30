import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "../../../../../models/Todo";
import { TodoService } from "../../service/todo.service";
import { ModalCreateTodoService } from "../../service/modal-create-todo.service";

@Component({
  selector: "app-modal-create-todo",
  templateUrl: "./modal-create-todo.component.html",
  styleUrls: ["./modal-create-todo.component.scss"],
})
export class ModalCreateTodoComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private modalCreateTodoService: ModalCreateTodoService
  ) {}
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  private newTodo: Todo;
  public modalOpen: boolean = false;

  ngOnInit() {
    this.clearForm();
    this.modalCreateTodoService.change.subscribe(
      (state) => (this.modalOpen = state)
    );
  }

  public clearForm() {
    this.newTodo = {
      _id: "",
      title: "",
      description: "",
      priority: "",
    };
  }

  createTodo() {
    console.log("onSubmit() ----------");

    console.log(this.newTodo);
    this.todoService.addTodo(this.newTodo).subscribe((response) => {
      const res = JSON.parse(response);
      console.log(res);
      if (res.success == true) {
        this.addTodo.emit(this.newTodo);
        this.clearForm();
      }
    });

    this.modalCreateTodoService.toggle(false);
  }
}
