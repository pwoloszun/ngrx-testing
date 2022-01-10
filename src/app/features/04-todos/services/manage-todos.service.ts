import { Injectable } from '@angular/core';
import { Todo, TODOS_DATA } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  public todos: Todo[] = [];

  createTodo(title: string, description: string): void {
    const id = Math.random();
    const todo = { id, title, description };
    this.todos = [...this.todos, todo];
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  loadTodos(): void {
    this.todos = TODOS_DATA;
  }
}
