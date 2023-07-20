import { useQuery } from '@tanstack/react-query';

import { todoKeys } from './query';

import type { Todo } from '@/features/todos/type';
import type { QueryOptions } from '@tanstack/react-query';

import { apiClient } from '@/lib/axios';

const getTodos = async () => {
  return await apiClient.get<Todo[]>('/todos').then((res) => res.data);
};

export const useTodos = (options?: QueryOptions<Todo[]>) => {
  return useQuery<Todo[]>(todoKeys.all, getTodos, options);
};
