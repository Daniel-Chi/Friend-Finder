//npm install express before running
const express = require("express");
const path = require("path");
//import external routing functions from htmlRoutes.js and apiRoutes.js
const htmlRouter = require("./app/routing/htmlRoutes");
const apiRouter = require("./app/routing/apiRoutes");

//create server instance
const app = express();

//create path strings
const homePath = path.join(__dirname, "app", "public", "home.html");
const surveyPath = path.join(__dirname, "app", "public", "survey.html")

//pass app and paths into exported functions
htmlRouter.htmlRouter(app, homePath, surveyPath);
apiRouter.apiRouter(app);

//server listener, local port 8080
app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on PORT 8080");
});