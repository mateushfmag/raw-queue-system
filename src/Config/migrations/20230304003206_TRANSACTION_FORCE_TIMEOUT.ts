import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(`
      CREATE TRIGGER FORCE_TIMEOUT AFTER INSERT ON TRANSACTION_QUEUE FOR EACH ROW
      BEGIN
        DECLARE tenMinutesAgo DATETIME;
        SET tenMinutesAgo = DATE_SUB(NOW(), INTERVAL 30 MINUTE);
        IF NEW.status_id = 1 AND NEW.created_at < tenMinutesAgo THEN
          UPDATE TRANSACTION_QUEUE SET status_id = 4 WHERE id = NEW.id;
        END IF;
      END;
    `).raw(`
      CREATE EVENT FORCE_TIMEOUT_EVENT ON SCHEDULE EVERY 1 MINUTE DO
      BEGIN
        CALL FORCE_TIMEOUT();
      END;
    `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw(`
    DROP EVENT FORCE_TIMEOUT_EVENT;
  `).raw(`
    DROP TRIGGER FORCE_TIMEOUT;
  `);
}
