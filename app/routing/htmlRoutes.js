//pass in app into exported function
module.exports = function(app, home, survey){

    //default path to home
    app.get("/", function (req, res) {
        res.sendFile(home);
    });
    
    //path to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(survey);
    });
}