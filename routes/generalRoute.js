const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("./utils");
const generalRoute = express.Router();

generalRoute.get("/", async (req, res) => {
  // Initialising the Firestore app
  const db = admin.firestore();

  // URL search parameters
  const { type, id, option, page, userId } = req.query;

  // TMDB promises
  configPromise = moviedbApi.get(
    `/configuration?api_key=${process.env.MOVIEDB_API_KEY}`
  );
  dataPromise = id
    ? type
      ? moviedbApi.get(
          `/${type}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
        )
      : undefined
    : type && option && page
    ? moviedbApi.get(
        `/${type}/${option}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
      )
    : undefined;

  // Gets all the movies/series
  if (type && option && page && userId && !id) {
    try {

      // Promises of user liked/rated movies/series
      const userLikedPromise = db
        .doc(`${type === "movie" ? "likedMovies/" : "likedSeries/"}${userId}`)
        .get();
      const userRatedPromise = db
        .doc(`${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`)
        .get();

      // An array of all promises
      const allPromises = [
        configPromise,
        dataPromise,
        userLikedPromise,
        userRatedPromise,
      ];

      // Resolved promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const config = resolvedPromises[0].data;
      const data = resolvedPromises[1].data;
      const userLiked = resolvedPromises[2].data();
      const userRated = resolvedPromises[3].data();

      // Base URL of pictures from TMDB config
      const baseURL = config.images.base_url + config.images.poster_sizes[6];

      // The configured data ready to be returned
      const configuredData = data.results.map((elem) => {
        return {
          title: elem.title,
          imageURL: baseURL + elem.poster_path,
          releaseDate: elem.release_date,
          id: elem.id,
          liked: checkIfLiked(elem.id, userLiked),
          rating: checkIfRated(elem.id, userRated),
        };
      });

      // Response
      res.status(200).json(configuredData);
      res.end();
    } 
    catch (error){
      console.log("Error encountered", error);
      res.status(500).json({
        params: req.params,
        status: "failed",
        reason: "internal server error",
        error: error
      });
    }

    return;
  }

  // Gets a specific movie/series
  if (type && id && userId && !option && !page) {
    // Data about the specific movie ready to be returned
    try {
      const data = await moviedbApi.get(
        `/${type}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
      );
      res.status(200).json(data.data);
      res.end();
    } 
    catch (error){
      console.log("Error encountered", error);
      res.status(500).json({
        params: req.params,
        status: "failed",
        reason: "internal server error",
        error: error
      });
    }

    return;
  }

  // No parameters case
  if (!userId && !type && !id && !page && !option) {
    res.status(404).json({
      params: req.params,
      status: "failed",
      reason: "No parameters in the URL",
    });
    res.end();
    return;
  }

  // Default case
  res.status(404).json({
    params: req.params,
    status: "failed",
    reason: "Wrong search parameters or server error",
  });
  res.end();
});

module.exports = generalRoute;
