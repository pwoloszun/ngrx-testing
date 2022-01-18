import { Component, OnInit } from '@angular/core';

import { TodoFormValues } from '../../components/todos-form/todos-form.component';
import { Todo } from '../../fake-data/todos-data';
import { InMemoryManageTodosService } from '../../services/in-memory-manage-todos.service';
import { ManageTodosService } from '../../services/manage-todos.service';

// thin
// Smart component/Container
//    GOOD: WHAT app/functionality should do
//    BAD: HOW app implements application logic
@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  get todos() {
    return this.manageTodosService.todos;
  }

  // feature facade
  // constructor(private manageTodosService: InMemoryManageTodosService) { }
  constructor(private manageTodosService: ManageTodosService) { }


  todoRemoveHandler(todo: Todo) {
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
