import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { TODOS_DATA } from '../../fake-data/todos-data';
import { MyManageTodosService, Todo } from '../../services/my-manage-todos.service';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos = TODOS_DATA;

  deleteTodo(toRemoveTodo: Todo) {
    this.todos = this.todos.filter((todo) => todo.id !== toRemoveTodo.id);
  }

  createTodo($event: TodoFormVm) {

  }

  ngOnInit() {
    // TODO

    const id = Math.random();
  }
}
