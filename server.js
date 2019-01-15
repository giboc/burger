var express = require("express");
var path = require("path");
const PORT = 8080;

var exphbs  = require('express-handlebars');

 
var app = express();

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);




app.listen(PORT);

