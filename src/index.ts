import { knex, Knex } from "knex";
import { knexConfig } from "./Config";

const knexInstance = knex(knexConfig.mysqlConnection);
const db = () => knexInstance("");
