//pass in app into exported function
module.exports = function(app){
    //default path to home
    app.get("/api/friends", function (req, res) {
        res.send("<h1>Hello?</h1>");
    });
    
    //path to survey page
    app.post("/api/friends", function (req, res) {
        res.send("<h1>Hello?</h1>");
    });
}