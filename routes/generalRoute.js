const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const generalRoute = express.Router();
const base_url = require("../baseURL");

generalRoute.get("/", async (req, res) => {
  // Initialising the Firestore app
  const db = admin.firestore();

  // URL search parameters
  const { type, id, option, page, userId } = req.query;

  // TMDB promises
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
  if (type && option && page && !id) {
    try {
      // Promises of user liked/rated movies/series
      const userLikedPromise = userId
        ? db
            .doc(
              `${type === "movie" ? "likedMovies/" : "likedSeries/"}${userId}`
            )
            .get()
        : undefined;
      const userRatedPromise = userId
        ? db
            .doc(
              `${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`
            )
            .get()
        : undefined;

      // An array of all promises
      const allPromises = userId
        ? [dataPromise, userLikedPromise, userRatedPromise]
        : [dataPromise];

      // Resolved promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const data = resolvedPromises[0].data.results;
      const userLiked = userId ? resolvedPromises[1].data() : undefined;
      const userRated = userId ? resolvedPromises[2].data() : undefined;

      // The configured data ready to be returned
      const configuredData = data.map((elem) => {
        return {
          title: elem.title || elem.name,
          poster_path: base_url + elem.poster_path,
          release_date: elem.release_date || elem.first_air_date,
          id: elem.id,
          liked: userLiked ? checkIfLiked(elem.id, userLiked) : null,
          rating: userRated ? checkIfRated(elem.id, userRated) : null,
        };
      });

      // Response
      res.status(200).json(configuredData);
      res.end();
    } catch (error) {
      console.log("Error encountered", error);
      res.status(500).json({
        params: req.query,
        status: "failed",
        reason: "internal server error",
        error: error,
      });
    }

    return;
  }

  // Gets a specific movie/series
  if (type && id && !option && !page) {
    // Data about the specific movie ready to be returned
    try {
      const userLikedPromise = userId
        ? db
            .doc(`${type === "movie" ? "likedMovie" : "likedSeries"}/${userId}`)
            .get()
        : undefined;

      const userRatedPromise = userId
        ? db
            .doc(
              `${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`
            )
            .get()
        : undefined;

      const allPromises = userId
        ? [dataPromise, userLikedPromise, userRatedPromise]
        : [dataPromise];

      // The data from all promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const data = resolvedPromises[0].data;
      const userLiked = userId ? resolvedPromises[1].data() : undefined;
      const userRated = userId ? resolvedPromises[2].data() : undefined;

      // The configured data ready to be returned
      const configuredData = {
        ...data,
        liked: userLiked ? checkIfLiked(data.id, userLiked) : null,
        rating: userRated ? checkIfRated(data.id, userRated) : null,
        base_url
      };

      res.status(200).json(configuredData);
      res.end();
    } catch (error) {

      console.log("Error encountered", error);
      res.status(500).json({
        params: req.query,
        status: "failed",
        reason: "internal server error",
        error: error,
      });
    }

    return;
  }

  // No parameters case
  if (!userId && !type && !id && !page && !option) {
    res.status(404).json({
      params: req.query,
      status: "failed",
      reason: "No parameters in the URL",
    });
    res.end();
    return;
  }

  // Default case
  res.status(404).json({
    params: req.query,
    status: "failed",
    reason: "Wrong search parameters or server error",
  });
  res.end();
});

module.exports = generalRoute;
