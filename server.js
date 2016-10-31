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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
//database part
var Pool=reqiure('pg').Pool;
var config={
    host:'db.imad.hasura-app.io',
    port:'5432',
    user:'arsh10209',
    password:'db-arsh10209-32406',
    database:process.env.dbpassword
};
var pool= new Pool(config);




