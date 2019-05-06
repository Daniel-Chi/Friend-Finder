const express = require("express");
const path = require("path");
//create server
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//default path to home
app.get("/", function (req, res) {
    res.sendfile("../public/home.html");
});

//path to survey page
app.get("/survey", function (req, res) {
    res.sendFile("../public/survey.html");
});

//server listener
app.listen(process.env.PORT || 8080, () => {
    if (process.env.PORT) {
        console.log("Server listening on PORT " + process.env.PORT);
    }
    else {
        console.log("Server listening on PORT 8080");
    };
});