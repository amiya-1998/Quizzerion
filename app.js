var express = require('express');
var app = express();
var data = require('./data.json');
data = data.data;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/articles', (req, res) => {
  res.render('articles', {articles: data});
});

app.get('/show/:id', (req, res) => {
  res.render('show');
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';
app.listen(port, ip, () => {
  console.log(`Server started at port ${port}`);
});
