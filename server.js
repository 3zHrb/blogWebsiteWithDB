var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var _ = require('lodash');
var mongoose = require('mongoose');


var app = express();

var postTitle;
var postBody;


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.listen(3000, function(){
  console.log("Session just started");
});

mongoose.connect("mongodb://localhost:27017/blogDataBase", {useNewUrlParser: true});
var schema = {
  title: String,
  body: String
};
var Collection = mongoose.model("blogPosts", schema);

app.get("/", function(req, res){
Collection.find({}, function(error, dataBack){
if(error){
  console.log("Error Occured while fetching the Collection");
  return;}
if(dataBack){
  console.log("DataBack is: " + dataBack);
  res.render("home", {dataBack: dataBack});
};
});
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

app.post("/posted", function(req, res){
postTitle = req.body.postTitle;
postBody = req.body.bodyTitle;

var row = new Collection({
  title: postTitle,
  body: postBody
});
row.save(function(error, passed){
  if(error){
    console.log("error occured while saving data to Database");
    return;
  };
if(passed){
  res.redirect("/");
};
});
});
