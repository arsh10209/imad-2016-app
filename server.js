var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').Pool;
var config={
    user:'arsh10209',
    database:'arsh10209',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/ARVIND.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ARVIND.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

