var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var _ = require('lodash');
var mongoose = require('mongoose');


var app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.listen(3000, function(){
  console.log("Session just started");
});

app.get("/", function(req, res){
  res.render("home");
});

app.get("/aboutus", function(req,res){

res.render("about");

});

app.get("/contactus", function(req, res){

res.render("contact");

});

app.get("/home", function(req, res){

res.redirect("/");

});

app.get("/compose", function(req, res){
  res.render("compose");
});
