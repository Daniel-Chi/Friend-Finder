module.exports = (function(){
    "use strict";
    var express = require("express");
    var htmlRoutes = express.Router();

    //default path to home
    htmlRoutes.get("/", function (req, res) {
        res.send("<h1>Hello?</h1>");
    });
    
    //path to survey page
    htmlRoutes.get("/survey", function (req, res) {
        res.send("<h1>Hello?</h1>");
    });

    return htmlRoutes;
})();