import { factory, primaryKey } from '@mswjs/data';
import { v4 as uuidv4 } from 'uuid';

export const db = factory({
  todo: {
    id: primaryKey(uuidv4),
    title: String,
    description: String,
    done: Boolean,
    createdAt: Date.now,
    updatedAt: Date.now,
  },
});
