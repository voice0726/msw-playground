import { useForm } from 'react-hook-form';

import type { CreateTodoBody } from '@/features/todos/api/create-todo';

import { useCreateTodo } from '@/features/todos/api/create-todo';

type FormValues = {
  title: string;
  done: boolean;
  description: string;
};

const CreateForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const { mutate } = useCreateTodo();
  const onSubmit = (data: FormValues) => {
    const body: CreateTodoBody = { ...data };
    mutate(body);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: 'title is required' })} />
      {errors.title && errors.title?.message}
      <input type="checkbox" {...register('done')} />
      <input {...register('description')} />
      <button type="submit">Create</button>
    </form>
  );
};
export default CreateForm;
