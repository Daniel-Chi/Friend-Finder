//User data constructor
function User(name, photoURL, scoresArray) {
    this.name = name;
    this.photo = photoURL;
    this.scores = scoresArray
};
//Mock starter values to initialize array
let usersArray = [];
usersArray.push(new User("Robert Squarepants", "https://vignette.wikia.nocookie.net/spongebob/images/9/95/%27%27Normal%27%27_Spongebob4.jpg/revision/latest?cb=20130617200616",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
usersArray.push(new User("Don Quixote", "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/lost-in-la-mancha-2002-002-quixote-horseback-00m-sgl.jpg?itok=_4DgmHwf",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
usersArray.push(new User("Karl Marx", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/800px-Karl_Marx_001.jpg",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
usersArray.push(new User("Ludwig van Beethoven", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
usersArray.push(new User("Lord Wellington Moncrief", "https://i.redd.it/xvb0xyjl8fr21.png",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
usersArray.push(new User("Robert Downey Jr.", "https://cbsnews1.cbsistatic.com/hub/i/2017/06/29/fe40ccf2-90d6-4b24-92bf-b8795d04c2c2/gettyimages-803015182.jpg",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));

//export data and User constructor
module.exports = {
    friendsData: usersArray,
    User: User
}