const express = require("express");
const path = require("path");
var app = express();

//get external routing functions from htmlRoutes.js and apiRoutes.js
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

//create path strings
const home = path.join(__dirname, "app", "public", "home.html");
const survey = path.join(__dirname, "app", "public", "survey.html")

//pass app into exported function
htmlRoutes(app, home, survey);
apiRoutes(app);

//server listener
app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on PORT 8080");
});