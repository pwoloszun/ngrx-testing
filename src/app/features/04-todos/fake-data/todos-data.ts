export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export type TodoParams = Omit<Todo, 'id'>;

const TODOS_DATA: Todo[] = [
  {
    title: 'rrrr',
    description: 'sd',
    id: 104
  },
  {
    title: 'abc',
    description: 'def',
    id: 106
  },
  {
    title: 'tt',
    description: 'sdsds',
    id: 107
  },
  {
    title: 'marc',
    description: '',
    id: 108
  }
];

export { TODOS_DATA };
