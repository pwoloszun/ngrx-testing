import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { InMemoryTodoListComponent } from './components/in-memory-todo-list/in-memory-todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    SharedModule,
  ],
  declarations: [
    TodosListComponent,
    TodosFormComponent,
    TodosComponent,
    InMemoryTodoListComponent,
  ],
})
export class TodosModule {
}
