var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./data.json');
data = data.data;

data.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/articles', (req, res) => {
  res.render('articles', {articles: data});
});

app.get('/articles/:id', (req, res) => {
    res.render('show', {article: data[req.params.id]});
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';
app.listen(port, ip, () => {
  console.log(`Server started at port ${port}`);
});
