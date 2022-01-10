import { Injectable } from '@angular/core';
import { Todo } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  public todos: Todo[] = [];

  createTodo(title: string, description: string): void {

  }

  removeTodo(todo: Todo): void {

  }

  loadTodos(): void {

  }
}
