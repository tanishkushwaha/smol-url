import pg from "pg";

const { Pool } = pg;

const pool = new Pool();

pool
  .connect()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

export default pool;
