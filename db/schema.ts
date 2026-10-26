import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const items = sqliteTable('items', { id: text('id').primaryKey(), type: text('type').notNull(), title: text('title').notNull(), date: text('date').notNull(), category: text('category').notNull(), details: text('details').notNull() });
