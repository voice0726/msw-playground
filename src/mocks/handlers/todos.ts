import { rest } from 'msw';

import type { CreateTodoBody } from '@/features/todos/api/create-todo';

import { API_URL } from '@/config/constants';
import { db } from '@/mocks/db';

const healthCheck = rest.get(`${API_URL}/health-check`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      status: 'ok',
    }),
  );
});

const getTodosHandler = rest.get(`${API_URL}/todos`, (req, res, ctx) => {
  const todos = db.todo.getAll();
  console.log(todos);
  return res(ctx.status(200), ctx.json(todos));
});

const createTodoHandler = rest.post(
  `${API_URL}/todos`,
  async (req, res, ctx) => {
    const body = await req.json<CreateTodoBody>();
    const created = db.todo.create(body);
    return res(ctx.status(201), ctx.json(created));
  },
);

export const todoHandlers = [healthCheck, getTodosHandler, createTodoHandler];
