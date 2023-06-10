import { rest } from 'msw';

import { db } from '@/mocks/db';

const healthCheck = rest.get('/health-check', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      status: 'ok',
    }),
  );
});

const getTodosHandler = rest.get('/todos', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([db.todos.getAll()]));
});

export const handlers = [healthCheck, getTodosHandler];
