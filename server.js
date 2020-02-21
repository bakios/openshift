var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
	serviceName: 'server'
  // Use if APM Server requires a token
  //     secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  //    serverUrl: ''

})



var mysql = require('mysql');

process.on('uncaughtException', (err) => {
 console.log(`Caught exception: ${err}`);
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
var con = mysql.createConnection({
 host: process.env.HOST,
 user: process.env.USER,
 password: process.env.PASSWORD,
 database: process.env.DATABASE
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
