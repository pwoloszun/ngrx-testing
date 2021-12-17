import { Injectable } from '@angular/core';

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
