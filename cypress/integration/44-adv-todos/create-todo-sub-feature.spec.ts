import { stubFetchTodosAs, getTodoListItemsAs, getTodoFormAs, fillFormWithAndSubmit, getModalInfoAs } from './helpers';

describe('Adv. Todos page: create todo sub-feature', () => {

  it('should render new Todo at the end of list', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    const newTodo = {
      id: 1000000,
      title: 'my next todo title lorem dolorem',
      description: 'my next desc'
    };

    cy.intercept({
      method: 'POST',
      pathname: '/api/todos',
    }, { body: newTodo }).as('createTodoRequest');

    cy.visit('/advanced-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');
    getTodoFormAs('todoForm');

    fillFormWithAndSubmit('@todoForm', {
      Title: newTodo.title,
      Description: newTodo.description,
    });

    cy.wait('@createTodoRequest')
      .then(({ request }) => {
        const { title, description } = newTodo;
        expect(request.body).to.deep.equal({ title, description });
      });

    cy.get('@todosJSON')
      .then((todos) => {
        cy.get('@todoListItems')
          .should('have.length', todos.length + 1)
          .invoke('last')
          .scrollIntoView()
          .should('be.visible')
          .and('contain', newTodo.title)
          .and('contain', newTodo.description);
      });
  });

  it('should indicate new Todo is being created', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    const newTodo = {
      id: 1000000,
      title: 'my next todo title lorem dolorem',
      description: 'my next desc'
    };

    cy.intercept({
      method: 'POST',
      pathname: '/api/todos',
    }, {
      body: newTodo,
    }).as('createTodoRequest');

    cy.visit('/advanced-todos');
    cy.wait('@getTodosRequest');

    getTodoFormAs('todoForm');
    fillFormWithAndSubmit('@todoForm', {
      Title: newTodo.title,
      Description: newTodo.description,
    });

    getModalInfoAs('modalInfo');

    cy.get('@modalInfo')
      .should('be.visible')
      .should('contain', `Creating Todo titled "${newTodo.title}"`);

    cy.wait('@createTodoRequest');

    cy.get('@modalInfo')
      .should('not.exist');
  });

});
