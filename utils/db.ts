// utils/db.ts

import { Pool } from "pg";

let pool: Pool | null = null;

if (!pool) {
  pool = new Pool();
  // console.log("New Pool Created");

  pool.connect().catch((err) => console.log(err));

  pool.on("connect", () => {
    // console.log("On connect");
  });

  pool.on("release", () => {
    // console.log("DB Connection Released");
  });

  pool.on("remove", () => {
    // console.log("DB Connection Removed");
  });
}

export default pool;
