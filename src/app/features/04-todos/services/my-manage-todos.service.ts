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

  loadTodos(): void {
    //TODO
  }

  create({ title, description }: TodoParams): void {
    //TODO
  }

  remove(todo: Todo): void {
    //TODO
  }
}
