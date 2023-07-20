export const todoKeys = {
  all: ['todos'],
  one: (id: string) => [...todoKeys.all, id],
}
