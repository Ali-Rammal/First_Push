var express = require("express");
var app = express();
var path = require('path');
var swig = require('swig');
var $ = require('jQuery');

app.use(express.static(__dirname));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/Static', function (req, res) {
 res.render("Project_2");
});

app.get('/Dynamic', function (req, res) {	
res.render("Project_2_2");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});