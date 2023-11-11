// express => WebServer Build
const express = require("express");
const app = express();
const port = 3000;

//  access to mysql
const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "nodejsuser",
  password: "nodejs",
  database: "learning2023",
});

con.connect();
con.query("SELECT * FROM customer", function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
  con.end();
});

app.get("/", (req, res) => res.send("Hello World."));

// Server On
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
