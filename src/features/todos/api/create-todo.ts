import { useMutation } from '@tanstack/react-query';

import type { Todo } from '@/features/todos/type';
import type { QueryOptions } from '@tanstack/react-query';

import { todoKeys } from '@/features/todos/api/query';
import { apiClient } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';

export type CreateTodoBody = {
  title: string;
  description: string;
  done: boolean;
};

const createTodo = async (body: CreateTodoBody) => {
  return await apiClient.post<Todo>('/todos', body).then((res) => res.data);
};

export const useCreateTodo = (options?: QueryOptions<Todo>) => {
  return useMutation(createTodo, {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(todoKeys.all);
    },
  });
};
