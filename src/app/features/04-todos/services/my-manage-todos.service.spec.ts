import { last } from 'lodash';
import { MyManageTodosService, Todo } from './my-manage-todos.service';

describe('MyManageTodosService', () => {

  describe('create(params)', () => {

    it('should create new todo', (done) => {
      const service = createMyManageTodosService();
      const title = 'my title';
      const description = 'some desc';

      let i = 0;
      service.allTodos$.subscribe((todos) => {
        if (i === 0) {
          expect(todos.length).toEqual(0);
        } else if (i === 1) {
          const lastTodo = last(todos);
          if (!lastTodo) {
            throw new Error(`Missing newly created todo`);
          }
          expect(lastTodo.title).toEqual(title);
          expect(lastTodo.description).toEqual(description);
          expect(lastTodo.id).toBeDefined();
          done();
        } else {
          throw new Error(`Unexpected call`);
        }
        i += 1;
      });

      service.create({ title, description });
    });
  });

  describe('remove(todo)', () => {

    it('should remove passed todo', (done) => {
      const service = createMyManageTodosService();
      let todoToRemove: Todo | null = null;
      const index = 1;

      let i = 0;
      service.allTodos$.subscribe((todos) => {
        i += 1;
        if (i === 1) {
          todoToRemove = todos[index];
          service.remove(todoToRemove);
        } else if (i === 2) {
          expect(todos).not.toContain(todoToRemove);
          done();
        } else {
          throw new Error('Unknown case');
        }
      });
    });

  });
});

function createMyManageTodosService(): MyManageTodosService {
  return new MyManageTodosService();
}
