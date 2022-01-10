import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormValues } from '../../components/todos-form/todos-form.component';
import { Todo, TODOS_DATA } from '../../fake-data/todos-data';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos = TODOS_DATA;

  constructor() { }

  deleteTodoHandler(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  createTodoHandler(params: TodoFormValues) {
    //TODO
    const id = Math.random();
  }

  ngOnInit() {
    // TODO
  }
}
