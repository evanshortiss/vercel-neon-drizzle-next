import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Elements = pgTable("elements", {
  id: serial('id').primaryKey(),
  name: text("name").notNull(),
  symbol: varchar("symbol", { length: 3 }).notNull(),
  atomicNumber: integer("atomic_number").notNull(),
});

export type Element = typeof Elements.$inferSelect;
