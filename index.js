const express = require("express");
require("dotenv").config();
var serviceAccount = require("./serviceAccountKey.json");
var admin = require("firebase-admin");

const generalRoute = require("./routes/generalRoute");
const friendsRoute = require("./routes/friendsRoute");
const recommendationsRoute = require("./routes/recommendationsRoute");
const peopleRoute = require("./routes/peopleRoute");
const creditsRoute = require("./routes/creditsRoute");
const userFriendsRoute = require("./routes/userFriendsRoute");

const app = express();
const port = 8080;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use("/general", generalRoute);

app.use("/person", peopleRoute);

app.use("/friends", friendsRoute);

app.use("/recommendations", recommendationsRoute);

app.use("/credits", creditsRoute);

app.use("/userFriends", userFriendsRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
