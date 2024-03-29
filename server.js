var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));


app.get('/home', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('home');
});

app.get('/team', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('team');
});

app.get('/advice', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('advice');
});

app.get('/resources', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('resources');
});

app.get('/discussion', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('discussion');
});

app.get('*', function(req, res) {
    res.status(404).render('404', {});
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});