import * as faker from 'faker';
import { Todo } from '@api/models/todos.models';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: update Todo sub-feature', () => {

  it('should be a optimistic locking update', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    const index = 3;
    const todoChanges: Partial<Todo> = {
      title: faker.lorem.words(3),
      description: faker.lorem.words(6),
    };

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const toUpdateTodo = todos[index];
        const nextTodo = {
          ...toUpdateTodo,
          ...todoChanges,
        };
        cy.intercept({
          method: 'PUT',
          pathname: `/api/todos/${toUpdateTodo.id}`,
        }, {
          body: nextTodo,
        }).as('updateTodoRequest');
      });

    cy.visit('/advanced-todos');

    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const todoDuringEdition = todos[index];
        cy.get('@todoListItems')
          .eq(index)
          .should('contain', todoDuringEdition.title)
          .findByText('Edit')
          .click();
      });

    // Edit and Save
    getTodoListItemsAs('todoListItems')
      .eq(index)
      .scrollIntoView()
      .within(() => {
        cy.findByLabelText('Edit title')
          .clear()
          .type(todoChanges.title);
        cy.findByLabelText('Edit description')
          .clear()
          .type(todoChanges.description);
        cy.findByText('Save')
          .click();
      });

    // Saving...
    getTodoListItemsAs('todoListItems')
      .eq(index)
      .scrollIntoView()
      .within(() => {
        cy.findByText('Saving...')
          .should('be.visible');
        cy.findByText(todoChanges.title)
          .should('be.visible');
        cy.findByText(todoChanges.description)
          .should('be.visible');

        cy.findByLabelText('Edit title')
          .should('not.exist');
        cy.findByLabelText('Edit description')
          .should('not.exist');

        cy.findByText('Save')
          .should('not.exist');
        cy.findByText('Cancel')
          .should('not.exist');

        cy.contains('button', 'Edit')
          .should('be.visible')
          .and('be.disabled');
        cy.contains('button', 'Remove')
          .should('be.visible')
          .and('be.disabled');
      });

    cy.wait('@updateTodoRequest')
      .then(({ request }) => {
        expect(request.body).to.deep.equal(todoChanges);
      });

    // Gotcha: wait until item list is rerendered
    cy.waitUntil(() => {
      return getTodoListItemsAs('todoListItems')
        .then(($listItems) => {
          const $updatedTodoListItem = $listItems.eq(index);
          const text = $updatedTodoListItem.text();
          const isSaving = Boolean(text.match(/Saving\.\.\./));
          return !isSaving;
        });
    });

    // Successfully Updated
    getTodoListItemsAs('todoListItems')
      .eq(index)
      .should('not.contain', 'Saving...')
      .within(() => {
        cy.findByText(todoChanges.title)
          .should('be.visible');
        cy.findByText(todoChanges.description)
          .should('be.visible');
        cy.contains('button', 'Edit')
          .should('be.visible')
          .and('not.be.disabled');
        cy.contains('button', 'Remove')
          .should('be.visible')
          .and('not.be.disabled');
      });
  });
});
