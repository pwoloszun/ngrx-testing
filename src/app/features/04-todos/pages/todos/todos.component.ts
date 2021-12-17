import { Component, OnInit } from '@angular/core';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
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
  }

  createTodo(params: TodoFormVm) {
    this.manageTodosService.create(params);
  }

  ngOnInit() {
    this.manageTodosService.loadTodos();
  }
}
