import { db } from '@/mocks/db';
import { testData } from '@/mocks/test-data';

export const seed = () => {
  if (db.todo.count() === 0) {
    console.log('seeding db');
    testData.todos.forEach((todo) => db.todo.create(todo));
  }
};
