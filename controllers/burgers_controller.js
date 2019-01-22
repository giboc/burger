var express = require("express");
var burgers = require("../models/burger.js")


var app = express();

var burger_list = [{
    burger_to_eat: [],
    id: []
}]

module.exports = (app) => {
    app.get("/", (req, res) => {
        burger_list = {
            order: []
        };
        burgers.list(function (result) {
            result.forEach((burger_to_eat) => {
                var burger = {
                    name: burger_to_eat.burger_name,
                    id: burger_to_eat.id,
                    devoured: burger_to_eat.devoured
                }
                burger_list.order.push(burger);
            });
            res.render("index", burger_list);
        })
    });

    app.post("/", (req, res) => {
        console.log(req.body);
        if (req.body.action === "add") {
            burgers.add(req.body.data);
            burgers.list(function (result) {
                result.forEach((name) => {
                    burger_list.order.push(name.burger_name);
                });
            })
        }
        if (req.body.action === "eat")
            burgers.eat(req.body.data);
    });
}

