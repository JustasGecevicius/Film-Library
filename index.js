const express = require("express");

const app = express();
const port = 8080;
require("dotenv").config();

const generalRoute = require("./routes/generalRoute");

app.use("/general", generalRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
