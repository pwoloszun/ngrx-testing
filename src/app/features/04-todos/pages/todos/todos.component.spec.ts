import {
  render,
  waitForElementToBeRemoved,
  waitFor,
  screen,
  within
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { FormsModule } from '@angular/forms';
import { last } from 'lodash';

import { SharedModule } from '@shared/shared.module';

import { TodosComponent } from './todos.component';
import { TODOS_DATA } from '../../fake-data/todos-data';
import { TodosListComponent } from '../../components/todos-list/todos-list.component';
import { TodosFormComponent } from '../../components/todos-form/todos-form.component';

describe('TodosComponent', () => {

  xit('should render todos', async () => {
    expect(false).toEqual(true);
  });

  xit('should remove todo when remove btn clicked', async () => {
    expect(false).toEqual(true);
  });

  xit('should create todo when todo form data submitted', async () => {
    expect(false).toEqual(true);
  });

});

async function renderTodosComponent() {
  //TODO
}
