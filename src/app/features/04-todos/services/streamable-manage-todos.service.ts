import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Todo } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class StreamableManageTodosService {

  todos$: Observable<Todo[]> = of([]); // TODO

  constructor(private httpClient: HttpClient) { }

  removeTodo(todo: Todo): void {
    // TODO
  }

  createTodo(title: string, description: string): void {
    // TODO
  }

  loadTodos(): void {
    // TODO
  }
}
