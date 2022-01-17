import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormValues } from '../../components/todos-form/todos-form.component';
import { Todo, TODOS_DATA } from '../../fake-data/todos-data';
import { ManageTodosService } from '../../services/manage-todos.service';

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

  constructor(private manageTodosService: ManageTodosService) { }

  todoRemoveHandler(todo: Todo) {
    this.manageTodosService.removeTodo(todo);
    // this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  createTodoHandler(params: TodoFormValues) {
    const { title, description } = params;
    this.manageTodosService.createTodo(title, description);
    // const id = Math.random();
    // const todo = { id, title, description };
    // this.todos = [...this.todos, todo];
  }

  ngOnInit() {
    this.manageTodosService.loadTodos();
  }
}
