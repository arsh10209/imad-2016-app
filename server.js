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

var article={
    title:'My Life My Choice',
    heading:'My Life My Choice',
    content:`<div id="supportingText">
			<div id="explanation">
			<h3><span>What is Lorem Ipsum?</span></h3>
			<p class="p1"><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>
		</div>
        <div id="participation">
			<h3><span>Where can I get some?</span></h3>
			<p class="p1"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span></p>
		</div>

		<div id="benefits">
			<h3><span>Why do we use it?</span></h3>
			<p class="p1"><span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p>
		</div>
     </div>`
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
    var htmltemplate=`
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" >
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title>${title}</title>
<link rel="stylesheet" type="text/css" media="screen" href="ui/style.css" />
</head>
<body background-image="header.jpg">

<div id="container">
	<div id="intro">
		<div id="pageHeader">
			<h1><span>${heading}</span></h1><br/><br/>
			<h2><span>@arsh10209</span></h2>
		</div>
        ${content}
	</div>

</body>
</html>
`;
 return htmltemplate;
}


app.get('/', function (req, res) {
    
   
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone', function (req, res) {
    
   res.send(createTemplate(article));
  
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
*/


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




