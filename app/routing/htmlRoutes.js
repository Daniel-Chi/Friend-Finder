const express = require("express");
const path = require("path");
//create server
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//default path to home
app.get("/", function (req, res) {
    res.send("<h1>Hello?</h1>");
});

//path to survey page
app.get("/survey", function (req, res) {
    res.send("<h1>Hello?</h1>");
});

//server listener
app.listen(process.env.PORT || 8080, () => {
        console.log("Server listening on PORT 8080");
});