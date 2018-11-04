const decryptMsg = require("../encryption/decrypt.js").decryptMsg; 
const mysql = require("mysql");
const express = require("express");
const utils = require("./utils");

var db = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "helpinghand"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(utils.accessControlAllowOrigin);

app.post("/insert", (req, res) => {
  var sql =
    "INSERT INTO Reports (encryptedReport) VALUES ('" +
    JSON.stringify(req.body.content) +
    "')";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Report inserted");
  });
});

app.get("/reports", (req, res) => {
  var sql = "SELECT encryptedReport FROM Reports;";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/decryptedreports", (req, res) => {
  var sql = "SELECT encryptedReport FROM Reports;";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    const decrypted = decryptMsg(result);
    res.send(decrypted);
  });
});



app.listen("3000", () => {
  console.log("Server started!!! :) ");
});
