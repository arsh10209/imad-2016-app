var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var article={
    title:'My Life My Choice',
    heading:'My Life My Choice',
    content:`
		<div>
			<h3><span>HAN BHIGAA DETI HAI</span></h3>
			<p align="left"><span><pre>
			    Han bhigaa deti hai
                Aaj bhi
                Mere laboon ko,
                Teri saanson ki ye nami.
                 
                Han rula deti hai
                Aaj bhi
                Meri aankoon ko,
                Teri ye kami.
                 
                Han badha deti hai
                Aaj bhi
                Meri dhadhkan ko,
                Teri pyaari si ye hasi.
                 
                Han mita deti hai
                Aaj bhi
                Mere dukhoon ko,
                Teri ye khushi.
                 
                Han bhula deti hai
                Aaj bhi
                Mere gusse ko,
                Teri itraati ye aavaaz pagli.
                 
                Han tadhpaa deti hai
                Aaj bhi
                Meri chaahat ko,
                Teri ye naraz khamoshi.</pre></span></p>
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




