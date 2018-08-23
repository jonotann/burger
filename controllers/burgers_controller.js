var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/');
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition", conditon);

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
       res.redirect('/');
    });
});

module.exports = router;