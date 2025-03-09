// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTableCreator,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `investments_${name}`);

export const users = createTable(
  "users",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).unique(),

  }
)
export const portfolios = createTable(
  "portfolios",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    userId: integer("userId").notNull().references(() => users.id),
    stocks: jsonb("stocks").$type<Record<string, number>>().default({}),
  }
)
export const stocks = createTable(
  "stocks",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    symbol: varchar("symbol", { length: 256 }).notNull(),
    price: integer("price").notNull(),
  }
)