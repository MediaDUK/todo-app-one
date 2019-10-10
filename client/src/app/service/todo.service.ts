import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Todo } from '../../../../models/Todo'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  private serverApi = 'http://localhost:3000';

  public getAllTodos(): Observable<Todo[]> {
    let URI = `${this.serverApi}/todos/`;
    return this.http.get(URI)
      .pipe(map((res: any) => res.todos))
      .pipe(map((todo: any) => <Todo[]>todo))
  }

  public deleteTodo(todoId: string) {
    console.log('todoId', todoId)
    let URI = `${this.serverApi}/todos/${todoId}`;
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, { headers }).pipe(map((res: any) => JSON.stringify(res)));
  }

  public addTodo(todo: Todo) {
    let URI = `${this.serverApi}/todos/`;
    let headers = new HttpHeaders;
    let body = { title: todo.title, description: todo.description, priority: todo.priority };
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, { headers: headers })
      .pipe(map((res: any) => JSON.stringify(res)));
  }
}