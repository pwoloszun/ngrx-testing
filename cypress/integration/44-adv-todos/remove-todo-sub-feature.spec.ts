import { Todo } from '@api/models/todos.models';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: remove todo sub-feature', () => {

  it('should indicate todo is removing, and then remove it from list', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');
    cy.intercept({
      method: 'DELETE',
      pathname: '/api/todos/*',
    }, {
      body: -999, // GOTCHA p1
    }).as('removeTodoRequest');

    cy.visit('/advanced-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const index = 2;
        const todoToRemove = todos[index];
        cy.wrap(todoToRemove)
          .as('todoToRemove');

        cy.get('@todoListItems')
          .eq(index)
          .as('toRemoveListItem')
          .should('contain', todoToRemove.title)
          .findByText('Remove')
          .click();

        cy.get('@toRemoveListItem')
          .should('contain', 'Removing...');

        cy.get('@toRemoveListItem')
          .contains('button', 'Remove')
          .should('be.disabled');
        cy.get('@toRemoveListItem')
          .contains('button', 'Edit')
          .should('be.disabled');
      });

    cy.wait('@removeTodoRequest')
      .then(({ request, response }) => {
        // GOTCHA p2
        const idStr = request.url.match(/\/api\/todos\/(\d+)/)[1];
        const removedTodoId = parseFloat(idStr);
        response.body = removedTodoId;
      });

    cy.get('@todosJSON')
      .then((todos) => {
        cy.get('@todoListItems')
          .should('have.length', todos.length - 1);
      });

    cy.get<Todo>('@todoToRemove')
      .then((todoToRemove) => {
        cy.get('@todoListItems')
          .should('not.contain', todoToRemove.title);
      });
  });

});
