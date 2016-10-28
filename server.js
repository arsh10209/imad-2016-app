var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
//sql connection
var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'localhost:5432',
      port     : '8080',
      user     : 'arsh10209',
      password : 'db-arsh10209-88997',
      database : 'arsh10209'
    } ); connection.connect(); var query = connection.query('SELECT * FROM http://localhost:3000/index.html');

query.on('error', function(err) {
    throw err; });

query.on('fields', function(fields) {
    console.log(fields); })

query.on('result', function(row) {
    console.log(row); }); connection.end();