import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo } from '../fake-data/todos-data';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) { }

  removeTodo(todo: Todo): void {
    this.httpClient.delete(`/api/todos/${todo.id}`)
      .subscribe(() => {
        this.loadTodos();
      });
  }

  createTodo(title: string, description: string): void {
    const params = { title, description };
    this.httpClient.post('/api/todos', params)
      .subscribe(() => {
        this.loadTodos();
      });
  }

  loadTodos(): void {
    this.httpClient.get('/api/todos')
      .pipe(
        delay(1200)
      )
      .subscribe((todos: any) => {
        this.todos = todos;
      });
  }
}
