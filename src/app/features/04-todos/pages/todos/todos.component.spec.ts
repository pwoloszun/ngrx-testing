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
import { MyManageTodosService } from '../../services/my-manage-todos.service';

describe('TodosComponent', () => {

  it('should render todos', async () => {
    const expectedTitles = TODOS_DATA.map(({ title }) => title);
    await renderTodosComponent();

    const itemRows = getAllItemRows();

    expect(itemRows.length).toEqual(TODOS_DATA.length);
    itemRows.forEach((row, i) => {
      const expectedTitle = expectedTitles[i];
      expect(row.textContent).toMatch(new RegExp(expectedTitle));
    });
  });

  it('should remove todo when remove btn clicked', async () => {
    const originalTitles = TODOS_DATA.map(({ title }) => title);
    const originalTodosCount = originalTitles.length;
    const removeIndex = 1;
    const removeTitle = originalTitles[removeIndex];
    await renderTodosComponent();

    const originalItemRows = getAllItemRows();
    const rowToRemove = originalItemRows[removeIndex];
    const btn = within(rowToRemove).getByRole('button', { hidden: true });
    userEvent.click(btn);

    // await waitForElementToBeRemoved(() => screen.getByText(removeTitle));
    const itemRows = getAllItemRows();
    expect(itemRows.length).toEqual(originalTodosCount - 1);
    itemRows.forEach((row) => {
      expect(row.textContent).not.toMatch(new RegExp(removeTitle));
    });
  });

  it('should create todo when todo form data submitted', async () => {
    const component = await renderTodosComponent();
    const originalTodosCount = getAllItemRows().length;

    const titleControl = component.getByTestId('title');
    const descriptionControl = component.getByTestId('description');
    const submitBtn = component.getByText('Submit');

    const expectedTitle = 'some new title';
    const expectedDescription = 'my new desc';
    userEvent.type(titleControl, expectedTitle);
    userEvent.type(descriptionControl, expectedDescription);
    userEvent.click(submitBtn);

    await waitFor(() => screen.getByText(expectedTitle));
    const itemRows = getAllItemRows();

    expect(itemRows.length).toEqual(originalTodosCount + 1);
    const lastRow = last(itemRows) as HTMLElement;
    expect(lastRow.textContent).toMatch(expectedTitle);
  });

});

async function renderTodosComponent() {
  return render(TodosComponent, {
    providers: [
      MyManageTodosService
    ],
    imports: [
      SharedModule,
      FormsModule,
    ],
    declarations: [
      TodosListComponent,
      TodosFormComponent,
    ],
  });
}

function getAllItemRows() {
  return screen.getAllByRole('listitem', { hidden: true });
}
