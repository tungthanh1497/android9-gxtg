var express = require('express');
var Hottie = require('./models/hottie');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://admin:admin@ds119223.mlab.com:19223/android9-gxtg'
, {useMongoClient: true});

var hottie = new Hottie({
    name: "Linh Ca",
    age: 16,
    image:"http://kenh14cdn.com/2017/16105485-1455844831123077-5879960679786806858-n-1497890356348.jpg"
  });

hottie.save();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// cu khi nao user truy cap vao /api thi function nay se dc goi
// res = response
app.get('/api', function(req, res){
    res.json({'hello': 'world'});
  }
);

app.get('/api/gxtg', function(req, res){
    res.json(hotties);
  }
);

app.post('/api/gxtg', function(req, res){
  var body = req.body;

  var name = body.name;
  var age = body.age;
  var image = body.image;

hotties.push({
  name:name,
  age:age,
  image:image
});

  res.json({"success":"1"});
  }
);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
