const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("./utils");
const peopleRoute = express.Router();

peopleRoute.get("/", async (req, res) => {
  // Initialising the Firestore app
  const db = admin.firestore();

  // URL search parameters
  const { id, userId, page } = req.query;

  // TMDB Promises
  configPromise = moviedbApi.get(
    `/configuration?api_key=${process.env.MOVIEDB_API_KEY}`
  );

  dataPromise =
    id === "all"
      ? page
        ? moviedbApi.get(
            `/person/popular?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
          )
        : undefined
      : id
      ? moviedbApi.get(
          `/person/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
        )
      : undefined;

  // Gets all the people
  if (id && page) {
    try {
      // Promises of user liked/rated movies/series
      const userLikedPromise = userId
        ? db.doc(`likedPeople/${userId}`).get()
        : undefined;

      // An array of all promises
      const allPromises = userId
        ? [configPromise, dataPromise, userLikedPromise]
        : [configPromise, dataPromise];

      // Resolved promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const config = resolvedPromises[0].data;
      const data = resolvedPromises[1].data;
      const userLiked = userId ? resolvedPromises[2].data() : undefined;

      // Base URL of pictures from TMDB config
      const baseURL = config.images.base_url + config.images.profile_sizes[3];

      // The configured data ready to be returned
      const configuredData = data.results.map((elem) => {
        return {
          title: elem.name,
          imageURL: baseURL + elem.profile_path,
          id: elem.id,
          liked: userId ? checkIfLiked(elem.id, userLiked) : null,
        };
      });

      res.status(200).json(configuredData);
      res.end();
    } catch (error) {
      console.log("Error encountered", error);
      res.status(500).json({
        params: req.params,
        status: "failed",
        reason: "internal server error",
        error: error,
      });
    }
    return;
  }

  // Gets details of a single person
  if (id && id !== "all") {
    try {
      // Promises for user liked people and people
      const userLikedPromise = userId
        ? db.doc(`likedPeople/${userId}`).get()
        : undefined;

      const dataPromise = moviedbApi.get(
        `/person/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
      );

      // An array of all promises
      const allPromises = userId
        ? [configPromise, dataPromise, userLikedPromise]
        : [configPromise, dataPromise];

      // The data from all promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const config = resolvedPromises[0].data;
      const data = resolvedPromises[1].data;
      const userLiked = userId ? resolvedPromises[2].data() : undefined;

      // Base URL for pictures from TMDB config
      const baseURL = config.images.base_url + config.images.profile_sizes[3];

      // Response
      res.status(200).json({ ...data, imageURL: baseURL + data.profile_path });
      res.end();
    } catch (error) {
      console.log("Error encountered", error);
      res.status(500).json({
        params: req.params,
        status: "failed",
        reason: "internal server error",
        error: error,
      });
    }
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

module.exports = peopleRoute;
