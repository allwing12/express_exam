import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/todos", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM todo ORDER BY id");
  console.log("rows", rows);

  res.json(rows);
});

app.get("/todos", function (req, res) {
  console.log("/todos 요청이 실행되었습니다.");
  res.send("HI111");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
