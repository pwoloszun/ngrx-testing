import { Injectable } from '@angular/core';
import { TODOS_DATA } from '../fake-data/todos-data';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export type TodoParams = Omit<Todo, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class MyManageTodosService {

  // TODO readonly todos
  todos: Todo[] = [];

  loadTodos(): void {
    this.todos = TODOS_DATA;
  }

  create({ title, description }: TodoParams): void {
    const id = Math.random();
    const newTodo = { id, title, description };
    this.todos = [...this.todos, newTodo];
  }

  remove(toRemoveTodo: Todo): void {
    this.todos = this.todos.filter((todo) => todo.id !== toRemoveTodo.id);
  }
}
