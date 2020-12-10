var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


/*
app.get('/home', function(req, res) {
  res.status(200).render('postPage', postData);
});
*/

app.use(express.json());

app.use(express.static('public'));


app.get('/home', function (req, res, next) {
  console.log("Using handlebars");
  res.status(200).render('home');
});

app.get('*', function(req, res) {
    res.status(404).render('404', {});
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});