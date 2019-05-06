var express = require("express");
var path = require("path");

//create server
var app = express();

//get external routing from htmlRoutes.js and apiRoutes.js
var htmlRoutes = require("./app/routing/htmlRoutes");
app.use("/htmlRoutes", htmlRoutes);
var apiRoutes = require("./app/routing/apiRoutes");
app.use("/apiRoutes", apiRoutes);

//server listener
app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on PORT 8080");
});