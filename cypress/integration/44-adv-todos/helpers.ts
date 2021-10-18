import { forEach } from 'lodash';

import { getMainPageContentAs } from '../helpers';

const todosFixturePath = '44-adv-todos/todos.json';

export function stubFetchTodosAs(routeAlias: string, jsonAlias: string): void {
  cy.fixture(todosFixturePath)
    .as(jsonAlias);
  cy.intercept({
    method: 'GET',
    pathname: '/api/todos',
  }, {
    fixture: todosFixturePath,
  }).as(routeAlias);
}

export function getTodoListItemsAs(alias: string) {
  return getMainPageContentAs('pageContent')
    .findByTestId('todos-list')
    .findAllByTestId('my-list-item')
    .as(alias);
}

export function getTodoFormAs(alias: string) {
  return getMainPageContentAs('pageContent')
    .findByTestId('todo-form')
    .as(alias);
}

interface FieldValuesDict {
  [label: string]: string;
}

export function fillFormWithAndSubmit(alias: string, fieldValues: FieldValuesDict): void {
  cy.get(alias)
    .within(() => {
      forEach(fieldValues, (fieldValue, label) => {
        cy.findByLabelText(label)
          .type(fieldValue);
      });
      cy.findByText('Submit')
        .click();
    });
}

export function getModalInfoAs(alias: string) {
  return cy.get('snack-bar-container')
    .as(alias);
}
