const express = require("express");
require("dotenv").config();
const generalRoute = require("./routes/generalRoute");
const friendsRoute = require("./routes/friendsRoute");

const app = express();
const port = 8080;


var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
const peopleRoute = require("./routes/peopleRoute");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use("/general", generalRoute);

app.use("/person", peopleRoute);

app.use("/friends", friendsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
