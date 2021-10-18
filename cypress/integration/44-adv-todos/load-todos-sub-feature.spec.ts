import { Todo } from '@api/models/todos.models';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: load todos sub-feature', () => {


  it('should render todo title for every fetched todo', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    cy.visit('/advanced-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        todos.forEach((todo, i) => {
          const { title, description = '' } = todo;
          cy.get('@todoListItems')
            .eq(i)
            .scrollIntoView()
            .within(() => {
              cy.findByText(title)
                .should('be.visible');
              if (description.trim().length > 0) {
                cy.findByText(description)
                  .should('be.visible');
              }
            });
        });
      });
  });

  it('should render progress bar before Todos are loaded, and hide it afterwards', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    cy.visit('/advanced-todos');
    cy.findByTestId('load-todos-progressbar')
      .should('be.visible');

    cy.wait('@getTodosRequest');
    cy.findByTestId('load-todos-progressbar')
      .should('not.exist');
  });

});
