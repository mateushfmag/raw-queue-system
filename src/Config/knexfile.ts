import { config } from "dotenv";
config({ path: "../../.env" });

export const mysqlConnection = {
  client: "mysql",
  connection: {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
  },
};

export default {
  ...mysqlConnection,
  migrations: {
    tableName: "queue_migrations",
  },
};
