var express=require('express'),
	path=reqiure('path'),
	bodyParser=reqiure('bosy-parser'),
	cons=reqiure('consolidate'),
	dust=reqiure('dustjs-helpers'),
	pg=reqiure('pg'),
	app=express();
//dbconnect
var connect="postgres://arsh10209:123456@localhost/blogging";

app.engine('dust',cons.dust);

app.set('view engine','dust');
app.set('views',__dirname+'/ui');

app.use(express.ststic(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',fuction(req,res){
	console.log('TEST');
});


    