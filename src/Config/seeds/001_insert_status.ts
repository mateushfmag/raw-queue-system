import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("TRANSACTION_STATUS").insert([
    { status: "WAITING" },
    { status: "IN_PROGRESS" },
    { status: "FINISHED" },
    { status: "CANCELED" },
  ]);
};
