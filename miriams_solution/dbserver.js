var mysql = require("mysql");
const express = require("express");

var db = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "helpinghand"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO Reports (encryptedReport) VALUES ('hejhejlouise')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Result: " + result);
  // });
});

const app = express();

app.get("/insert", (req, res) => {
  var sql = "INSERT INTO Reports (encryptedReport) VALUES ('hejhejlouise')";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("result");
    res.send("Report inserted");
  });
});

app.listen("3000", () => {
  console.log("Server started!!! :) ");
});
