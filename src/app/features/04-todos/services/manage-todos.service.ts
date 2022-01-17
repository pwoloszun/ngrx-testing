import { Injectable } from '@angular/core';
import { Todo } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  todos: Todo[] = [];

  removeTodo(todo: Todo): void {
    // TOOD
  }

  createTodo(title: string, description: string): void {

  }

  loadTodos(): void {

  }

}
