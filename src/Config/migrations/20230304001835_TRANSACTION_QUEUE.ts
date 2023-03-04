import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("TRANSACTION_QUEUE", (table) => {
    table.increments("id").primary();
    // creates updated_at and created_at columns
    table.timestamps(true, true);
    table.dateTime("in_progress_timestamp");
    table.dateTime("finished_timestamp");
    table.dateTime("canceled_timestamp");
    table.integer("transaction_id").unique().notNullable();
    table.integer("status_id").unsigned().notNullable();
    table.foreign("status_id").references("id").inTable("TRANSACTION_STATUS");
    const bytes = 1024;
    table.binary("payload", bytes).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TRANSACTION_QUEUE");
}
