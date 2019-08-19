// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// routing
import { AppRoutingModule } from './app-routing.module';
// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { FooterComponent } from './component/footer/footer.component';
// service
import { TodoService } from './service/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    AddTodoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
