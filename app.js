var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./data.json');
var fuse = require('fuse.js');
var moment = require('moment');
var questions = require('./questions.json');
data = data.data;
questions = questions.questions;

data.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/articles', (req, res) => {
  if(req.query.query == null) {
    res.render('articles', {articles: data});
  } else {
    var options = {
      keys: ['title', 'location']
    };
    var fuzzy = new fuse(data, options);
    var foundArticles = fuzzy.search(req.query.query);
    res.render('articles', {articles: foundArticles});
  }
});

app.get('/articles/:id', (req, res) => {
    var newDateForm = moment(data[req.params.id].updated_at, ["DD-MM-YYYY", "MM-DD-YYYY"]).format('LL');
    data[req.params.id].updated_at = newDateForm;
    res.render('show', {article: data[req.params.id]});
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/quiz', (req, res) => {
  res.render('quiz', {questions: questions});
})

// Change it to show no such website exists
app.get('*', (req, res) => {
  res.send("No such site exists");
})

// POST ROUTE TO IMPLEMENT NODEMAILER
app.post('/mail', (req, res) => {
  console.log(req.body.name);
  res.redirect("/contact");
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

app.listen(port, ip, () => {
  console.log(`Server started at port ${port}`);
});
