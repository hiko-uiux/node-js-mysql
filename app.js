// WebServer Setting(Express)
const express = require("express");
const app = express();
const port = 3000;

//  Database Setting(MySQL)
const mysql = require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  user: "nodejsuser",
  password: "nodejs",
  database: "learning2023",
});

// Database-On
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
// Server-On
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Request & Response
app.get("/", (req, res) => {
  const sqlTest = "SELECT * FROM customer";
  con.query(sqlTest, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
    con.end();
  });
  res.send("Hello World.");
});
