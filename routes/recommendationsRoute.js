const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const recommendationsRoute = express.Router();
const base_url = require("../baseURL");

recommendationsRoute.get("/", async (req, res) => {
  try{
  // Initialising the Firestore app
  const db = admin.firestore();

  // URL search parameters
  const { type, id, userId, page } = req.query;

  const dataPromise =
    !type || !id || !page
      ? undefined
      : moviedbApi.get(
          `/${type}/${id}/recommendations?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
        );

  const userLikedPromise =
    userId && type
      ? db
          .doc(`${type === "movie" ? "likedMovies/" : "likedSeries/"}${userId}`)
          .get()
      : undefined;
  const userRatedPromise =
    userId && type
      ? db
          .doc(`${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`)
          .get()
      : undefined;

  const allPromises = userId
    ? [dataPromise, userLikedPromise, userRatedPromise]
    : [dataPromise];

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
  res.status(200).json(configuredData);

  return;
}
catch{
  res.status(404).json({
    params: req.query,
    status: "failed",
    reason: "Wrong search parameters or server error",
  });
  res.end();
}
});

module.exports = recommendationsRoute;
