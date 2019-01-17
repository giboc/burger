var express = require("express");
var burgers = require("../models/burger.js")


var app = express();

var burger = []
var test = [
{val: [1,2,3,4]},
{burger: "burger test"}

]

module.exports = (app) =>{
    app.get("/", (req, res) => {
        res.render("index",test);
    });

    app.post("/", (req, res) => {
        // console.log(req.body);
        // burgers.add(req.body.burger);
        // console.log(burgers.list());
        
        burgers.list(function(result){
            result.forEach( (name)=>{
                burger.push(name.burger_name);
            });
            console.log(burger);
            res.render("index",test);
        })
        
        
    });
        
}

