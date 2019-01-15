var express = require("express");
var burgers = require("../models/burger.js")


var app = express();

var burger = [
    {
        burger: ""
    }
]
module.exports = (app) =>{
    app.get("/", (req, res) => {
        res.render("index", burger[0]);
    });

    app.post("/", (req, res) => {
        console.log(req.body);
        burgers.add(req.body.burger);
    });
        
}

