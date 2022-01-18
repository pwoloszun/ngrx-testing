import { Component, OnInit } from '@angular/core';

import { ManageTodosService } from '../../services/manage-todos.service';

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
