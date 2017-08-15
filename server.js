var express = require("express");
var bodyParser = require("body-parser");
var override = require("method-override");
var path = require("path");
//var hb = require("express-handlebars");
var db = require("./models");


var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(override("_method"));
//app.engine("handlebars", hb({defaultLayout: "main"}));
//app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");

app.use("/", routes);


//removed force : true in .sync({force:true}) to keep the information inserted in the table
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});

