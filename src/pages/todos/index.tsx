'use client';

import { useTodos } from '@/features/todos/api/get-todos';
import CreateForm from '@/features/todos/components/create-form';
import { apiClient } from '@/lib/axios';

const Todos = () => {
  const getTodos = async () => {
    return await apiClient.get(`/todos`).then((res) => res.data);
  };

  const handleClick = async () => {
    const todos = await getTodos();
    console.log(todos);
  };

  const { data: todos, isLoading } = useTodos();
  if (isLoading) return <div>Loading...</div>;
  if (!todos)
    return (
      <>
        <div>Something went wrong</div>
        <button onClick={handleClick}>Click me</button>
      </>
    );

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
      <CreateForm />
    </div>
  );
};
export default Todos;
