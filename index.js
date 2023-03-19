const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();

const apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
