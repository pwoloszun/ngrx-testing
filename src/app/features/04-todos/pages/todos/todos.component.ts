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

  createTodo({ title, description }: TodoFormVm) {
    const id = Math.random();
    const newTodo = { id, title, description };
    this.todos = [...this.todos, newTodo];
  }

  ngOnInit() {
    // TODO

  }
}
