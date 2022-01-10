import { Component, OnInit } from '@angular/core';

import { TodoFormValues } from '../../components/todos-form/todos-form.component';
import { Todo } from '../../fake-data/todos-data';
import { ManageTodosService } from '../../services/manage-todos.service';

// Smart Component / Container
// GOOD: WHAT app should do
// BAD: HOW app works
@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  get todos() {
    return this.manageTodosService.todos;
  }

  constructor(private manageTodosService: ManageTodosService) { }

  deleteTodoHandler(todo: Todo) {
    this.manageTodosService.removeTodo(todo);
  }

  createTodoHandler(params: TodoFormValues) {
    const { title, description } = params;
    this.manageTodosService.createTodo(title, description);
  }

  ngOnInit() {
    this.manageTodosService.loadTodos();
  }
}
