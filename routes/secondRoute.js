const express = require("express");
const moviedbApi = require("../axios");

const secondRoute = express.Router();

secondRoute.get("/:type", async (req, res) => {
  console.log(req.params);
  const { data } = await moviedbApi.get(
    `/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`
  );
  res.json({
    success: true,
    data,
  });
});

module.exports = secondRoute;
