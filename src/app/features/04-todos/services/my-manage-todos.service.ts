import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TODOS_DATA } from '../fake-data/todos-data';

export interface TodoParams {
  title: string;
  description?: string;
}

export interface Todo extends TodoParams {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class MyManageTodosService {

  private loadedTodos$ = new BehaviorSubject<Todo[]>([]);

  allTodos$ = this.loadedTodos$.asObservable();

  loadTodos(): void {
    this.loadedTodos$.next([...TODOS_DATA]);;
  }

  create({ title, description }: TodoParams): void {
    const createdTodo = {
      id: Math.random(),
      title,
      description
    };
    const nextTodos = [...this.loadedTodos$.value, createdTodo];
    this.loadedTodos$.next(nextTodos);
  }

  remove(todo: Todo): void {
    const nextTodos = this.loadedTodos$.value.filter((t) => t.id !== todo.id);
    this.loadedTodos$.next(nextTodos);
  }
}
