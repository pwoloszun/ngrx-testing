import { Injectable } from '@angular/core';

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
