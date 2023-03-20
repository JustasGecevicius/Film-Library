const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");

const secondRoute = require("./secondRoute");
const generalRoute = express.Router();

generalRoute.get("/:userId/:type/:id/:option/:page", async (req, res) => {
  const { type, id, option, page, userId } = req.params;

  const configPromise = moviedbApi.get(
    `/configuration?api_key=${process.env.MOVIEDB_API_KEY}`
  );

  const dataPromise = moviedbApi.get(
    id === "all"
      ? `/${type}/${option}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
      : `/${type}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
  );

  const axiosPromises = [configPromise, dataPromise];

  const responses = await axios.all(axiosPromises)

  if (id === "all") {
     const sortedData = responses[1].data.results.map((elem) => {
      return {
        imageURL: `${responses[0].data.images.base_url}${responses[0].data.images.poster_sizes[6]}${elem.poster_path}`,
        title: elem.title,
        release_date: elem.release_date,
        id : elem.id,
        liked : false,
        rated : false,
      };
    });
    res.json({
      success: true,
      data: sortedData
    })
  }
  // else {
  //   res.json({
  //     success: true,
  //     data: data
  //   })
  // }

  // const {userData} =
  // const filteredData = {...data, "results" : data.results.map(elem => {
  //   return {
  //     title
  //   }
  // })}


});

module.exports = generalRoute;
