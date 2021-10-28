import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { MyManageTodosService, Todo } from '../../services/my-manage-todos.service';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  get todos$(): Observable<Todo[]> {
    return this.todosService.allTodos$;
  }

  constructor(private todosService: MyManageTodosService) {
  }

  deleteTodo(todo: Todo) {
    this.todosService.remove(todo);
  }

  createTodo(todoData: TodoFormVm) {
    this.todosService.create(todoData);
  }

  reloadTodosHandler() {
    this.todosService.loadTodos();
  }

  ngOnInit() {
    this.todosService.loadTodos();
  }
}
