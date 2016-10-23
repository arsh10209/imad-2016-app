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
function myFunction() {
var firstname = document.getElementById("First_Name").value;
var lastname=document.getElementById("Last_Name").value;
var birthday=document.getElementById("Birthday_Day").value;
var birthmonth=document.getElementById("Birthday_Month").value;
var birthyear=document.getElementById("Birthday_Year").value;
var email = document.getElementById("Email_Id").value;
var moblie= document.getElementById("Mobile_Number").value;
var branch=document.getElementById("branch").value;
var sem=document.getElementById("semester").value;

}