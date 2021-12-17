import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { TODOS_DATA } from '../../fake-data/todos-data';
import { MyManageTodosService, Todo } from '../../services/my-manage-todos.service';

// Smart Components aka Container
// Respons:
//    WHAT app is doing -> GOOD
//    HOW app is doing it -> WRONG!
@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  get todos() {
    return this.manageTodosService.todos;
  }

  constructor(private manageTodosService: MyManageTodosService) { }

  deleteTodo(toRemoveTodo: Todo) {
    this.manageTodosService.remove(toRemoveTodo);
    // this.todos = this.todos.filter((todo) => todo.id !== toRemoveTodo.id);
  }

  createTodo(params: TodoFormVm) {
    this.manageTodosService.create(params);

    // const id = Math.random();
    // const newTodo = { id, title, description };
    // this.todos = [...this.todos, newTodo];
  }

  ngOnInit() {
    this.manageTodosService.loadTodos();
  }
}
