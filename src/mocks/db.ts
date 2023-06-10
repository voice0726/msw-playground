import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
    done: Boolean,
    createdAt: Number,
    updatedAt: Number,
  },
});
