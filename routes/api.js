const express = require("express");
const moviedbApi = require("../axios");

const app = express.Router();

app.get("/test", async (req, res) => {
  const { data } = await moviedbApi.get(
    `/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`
  );

  res.json({
    success: true,
    data,
  });
});

module.exports = app;
