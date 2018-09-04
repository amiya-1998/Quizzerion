var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./data.json');
var fuse = require('fuse.js');
var moment = require('moment');
data = data.data;

data.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/articles', (req, res) => {
  data.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  if(req.query.query == null) {
    res.render('articles', {articles: data});
  } else {
    var options = {
      keys: ['title', 'location']
    };
    var fuzzy = new fuse(data, options);
    var foundArticles = fuzzy.search(req.query.query);
    foundArticles.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    res.render('articles', {articles: foundArticles});
  }
});

app.get('/articles/:id', (req, res) => {
  data.sort((a,b) => a.id - b.id);
  var newDateForm = moment(data[req.params.id].updated_at, ["DD-MM-YYYY", "MM-DD-YYYY"]).format('LL');
  res.render('show', {article: data[req.params.id], date: newDateForm});
});

app.get('/about', (req, res) => {
  res.render('about');
})

// WAITING / INSTRUCTION PAGE FOR QUIZ
app.get('/initquiz', (req, res) => {
  res.render('initquiz');
});

app.get('/quiz', (req,res) => {
  res.render('quiz');
});

app.post('/quiz', (req,res) => {
  res.redirect('/results');
});

// Change it to show no such website exists
app.get('*', (req, res) => {
  res.render('error');
});

// POST ROUTE TO IMPLEMENT NODEMAILER
app.post('/mail', (req, res) => {
  console.log(req.body.name);
  res.redirect("/contact");
});

// var port = process.env.PORT || 3000;
// var ip = process.env.IP || 'localhost';
//
// app.listen(port, ip, () => {
//   console.log(`Server started at port ${port}`);
// });

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
