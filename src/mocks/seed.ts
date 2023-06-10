import { db } from '@/mocks/db';

export const seed = () => {
  db.todo.create({
    id: '1',
    title: 'Buy milk',
    done: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
};
