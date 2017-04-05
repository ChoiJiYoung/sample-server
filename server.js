var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})

app.get('/user/search', function (req, res) {

  console.log('데이터 확인', req.query.name);

  // TODO 실제로 DB 데이터를 조회하는 로직을 개발해야 함.

  var users = [{
    userId: 13579,
    name: 'John',
    email: 'yohany_AT_gmail.com',
    company: 'KossLAB'
  }];

  res.send({result: users});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.post('/user', function (req, res) {
  res.send('POST (Create) ');
});

app.get('/user/:userId', function (req, res) {
  res.send('GET (Read) ');
});

app.put('/user/:userId', function (req, res) {
  res.send('PUT (Update) ');
});

app.delete('/user/:userId', function (req, res) {
  res.send('DELETE (Delete) ');
});
