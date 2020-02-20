var mysql = require('mysql');

process.on('uncaughtException', (err) => {
 console.log(`Caught exception: ${err}`);
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
var con = mysql.createConnection({
 host: "mysql",
 user: "root",
 password: "password",
 database:"test"
});
con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
});
con.query('SELECT * from test2', function (err, rows, fields) {
 if (err) res.send(err)
 console.log('The solution is: ', rows)
 res.send(rows)
})
 })
app.listen(port, () => console.log(`Example app listening on port ${port}`))
