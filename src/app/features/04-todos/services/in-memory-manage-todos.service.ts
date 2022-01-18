import { Injectable } from '@angular/core';
import { Todo, TODOS_DATA } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryManageTodosService {

  todos: Todo[] = [];

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  createTodo(title: string, description: string): void {
    const id = Math.random();
    const todo = { id, title, description };
    this.todos = [...this.todos, todo];
  }

  loadTodos(): void {
    this.todos = TODOS_DATA;
  }

}
