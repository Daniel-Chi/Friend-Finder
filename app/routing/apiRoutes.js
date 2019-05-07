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
        //parse request data
        const newUser = new User(name, photo, scores);
        //calculate user with the most similar answers, store as an index (initial value -1)
        let friendIndex = -1;
        calculateFriend(newUser);
        newFriend = friendsData[friendIndex];
        //add new user object to the array
        friendsData.push(newUser);
        //edit modal to display suggested friend
        $(".modal-title").text(newFriend.name);
        $(".modal-body").html("<img src='"+newFriend.photo+"'>");
    });

    //function for calculating user with most similar answers
    function calculateFriend(User) {
        //initialize array to store difference in score for each possible friend
        let scoreDifferences = [];
        for (i = 0; i < friendsData.length; i++) {
            //initialize difference in score for each possible friend
            let diff = 0;
            //loop through question answers to calculate difference in score
            for (j = 0; j < 10; j++) {
                //absolute value of difference in scores for current question j
                diff += Math.abs(User.scores[j] - friendsData[i].scores[j]);
            };
            scoreDifferences.push(diff);
        };
        friendIndex = scoreDifferences.indexOf(Math.min.apply(Math, scoreDifferences))
    };
};
//exports
module.exports = {
    apiRouter: apiRouter
};