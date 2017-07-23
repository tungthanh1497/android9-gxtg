var express = require('express');
var Hottie = require('./models/hottie');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://admin:admin@ds119223.mlab.com:19223/android9-gxtg'
, {useMongoClient: true});

// var hottie = new Hottie(
//     {
//       name: "Lệ Rơi",
//       age: 27,
//       image:"https://i.ytimg.com/vi/tAKXiqwUC6Q/hqdefault.jpg"
//     }
// );
//
// hottie.save();


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
  Hottie.find(function(err, hotties){
      if(err){
        res.json({success:0, message: "Could not get data from mlab"})
      }else{
        res.json(hotties);
      }
    }
  );
  }
);

app.post('/api/gxtg', function(req, res){
  var body = req.body;

  var nameValue = body.name;
  var ageValue = body.age;
  var imageValue = body.image;

  var hottie = new Hottie({
    name:nameValue,
    age:ageValue,
    image:imageValue
  });

  hottie.save(function(err, addedHottie){
    if(err){
        res.json({success:0, message: "Could not add record: "+err});
    }else {
        res.json(addedHottie);
    }
  });



  }
);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
