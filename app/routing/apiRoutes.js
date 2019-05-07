//import data from friends.js
const database = require("../data/friends");
let friendsData = database.friendsData;

//create api routing functions
const apiRouter = function (app) {

    //default path to home
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    //path to survey page
    app.post("/api/friends", function (req, res) {
        //basic input validation to check if already existing
        for (i=0;i<friendsData.length;i++){
            if (friendsData[i].name===req.body.name){
                return res.send({name: "You are already in the database"});
            };
        };
        //parse request data
        const scores = req.body.scores;
        //perform calculation to search for user with least difference in scores
        //initialize array to store difference in score for each possible friend from all users
        let scoreDifferences = [];
        for (i = 0; i < friendsData.length; i++) {
            //initialize difference in score for each possible friend
            let diff = 0;
            //loop through question answers to calculate difference in score
            for (j = 0; j < 10; j++) {
                //absolute value of difference in scores for current question j
                diff += Math.abs(scores[j] - friendsData[i].scores[j]);
            };
            scoreDifferences.push(diff);
        };
        //find the index of the user with the least difference
        const friendIndex = scoreDifferences.indexOf(Math.min.apply(Math, scoreDifferences))
        const newFriend = friendsData[friendIndex];
        //add new user object to the array of all users
        friendsData.push(req.body);
        //send response for post request
        res.send(newFriend)
    });
};
//exports
module.exports = {
    apiRouter: apiRouter
};