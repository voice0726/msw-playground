import { faker } from '@faker-js/faker';

export const testData = {
  todos: [
    {
      id: faker.string.uuid(),
      title: 'Buy milk',
      done: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ],
};
