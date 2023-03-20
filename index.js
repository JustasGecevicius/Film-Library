const express = require("express");
require("dotenv").config();
const generalRoute = require("./routes/generalRoute");

const app = express();
const port = 8080;


var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// app.use("/", (req, res) => {
//   console.log("default page");
//   res.send("Server Running (Default page)");
// })

app.use("/general", generalRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
