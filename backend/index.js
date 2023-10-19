console.log("hey");

var mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crud" 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(8081, () => {
    console.log("listening");
})

app.get("/", (req,res) => {
    const sql = "SELECT * FROM student";
    con.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
}) 