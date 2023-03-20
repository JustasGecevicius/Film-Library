const express = require("express");
const moviedbApi = require("../axios");
const secondRoute = require("./secondRoute");
const generalRoute = express.Router();

generalRoute.get("/:userId/:type/:id/:option/:page", async (req, res) => {
  const {type, id, option, page, userId} = req.params;
  const { data } = await moviedbApi.get(
    id === "all" ? `/${type}/${option}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}` : `/${type}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
  );
  // const {userData} = 
  // const filteredData = {...data, "results" : data.results.map(elem => {
  //   return {
  //     title
  //   }
  // })}

  res.json({
    success: true,
    data,
  });
});

module.exports = generalRoute;
