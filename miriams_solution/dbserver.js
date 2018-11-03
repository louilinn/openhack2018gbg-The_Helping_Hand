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

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post("/insert", (req, res) => {
  console.log(req.body);
  // var sql = "INSERT INTO Reports (encryptedReport) VALUES ("+JSON.stringify(req.body)+")";
  var sql = "INSERT INTO Reports (encryptedReport) VALUES ('heeej')";
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("result");
    res.send("Report inserted");
  });
});

app.listen("3000", () => {
  console.log("Server started!!! :) ");
});
