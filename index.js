var express = require('express');
var hotties = require('./models/hottie');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

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

app.post('/api/gxtg', function(req, res)){
  res.json({'post': 'API POST'})
};


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
