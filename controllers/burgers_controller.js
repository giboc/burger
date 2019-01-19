var express = require("express");
var burgers = require("../models/burger.js")


var app = express();

var burger = [
    {
        burger: ""
    }
]
var burger_list = [
    {
        items: []

    }
]

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index", burger_list[0]);
    });

    app.post("/", (req, res) => {
        burgers.add(req.body.burger);
        var burger_list = [
            {
                items: []
            }
        ]
        burgers.list(function (result) {
            result.forEach((name) => {
                burger_list[0].items.push(name.burger_name);
            });
            res.redirect("/");
        })
    });
}

