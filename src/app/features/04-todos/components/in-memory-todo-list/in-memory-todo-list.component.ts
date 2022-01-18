import { Component, OnInit } from '@angular/core';
import { Todo } from '../../fake-data/todos-data';

import { InMemoryManageTodosService } from '../../services/in-memory-manage-todos.service';
import { TodoFormValues } from '../todos-form/todos-form.component';

@Component({
  selector: 'nts-in-memory-todo-list',
  templateUrl: './in-memory-todo-list.component.html',
  styleUrls: ['./in-memory-todo-list.component.css']
})
export class InMemoryTodoListComponent implements OnInit {

  get todos() {
    return this.manageTodosService.todos;
  }

  // feature facade
  constructor(private manageTodosService: InMemoryManageTodosService) { }

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
