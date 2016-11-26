var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var pool=require('pg').Pool;

/*var config={
    user:'arsh10209',
    database:'arsh10209',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD,
};
*/

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


/*var pool=new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.ststus(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
*/
app.get('/articles/article',function(req,res){
    pool.query("SELECT * FROM articles where title='"+req.params.articleName+"'",function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            if(result.rows.length===0){
                res.status(404).send('article not found');
            }else{
                var articledata=result.row[0];
                res.send(createTemplate(articledata));
            }
        }
    });
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/header.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'header.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});




