const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const peopleRoute = express.Router();
const base_url = require("../baseURL");

peopleRoute.get("/", async (req, res) => {
  // Initialising the Firestore app
  const db = admin.firestore();

  // URL search parameters
  const { id, userId, page } = req.query;

  // TMDB Promises
  const dataPromise =
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
  if (id === "all" && page) {
    try {
      // Promises of user liked/rated movies/series
      const userLikedPromise = userId
        ? db.doc(`likedPeople/${userId}`).get()
        : undefined;

      // An array of all promises
      const allPromises = userId
        ? [dataPromise, userLikedPromise]
        : [dataPromise];

      // Resolved promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const data = resolvedPromises[0].data;
      const userLiked = resolvedPromises[1]
        ? resolvedPromises[1].data()
        : undefined;

      // The configured data ready to be returned
      const configuredData = data.results.map((elem) => {
        return {
          title: elem.name,
          imageURL: base_url + elem.profile_path,
          id: elem.id,
          liked: userLiked ? checkIfLiked(elem.id, userLiked) : null,
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
  if (id && id !== "all" && !page) {
    console.log(page);
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
        ? [dataPromise, userLikedPromise]
        : [dataPromise];

      // The data from all promises
      const resolvedPromises = await axios.all(allPromises);

      // Variables for the fetched data
      const data = resolvedPromises[0].data;
      const userLiked = resolvedPromises[1]
        ? resolvedPromises[1].data()
        : undefined;

      const configuredData = {
        ...data,
        profile_path: base_url + data.profile_path,
        liked: userLiked ? checkIfLiked(data.id, userLiked) : null,
        title: data.name
      };

      delete configuredData.name
      // Response
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
  // Default case
  res.status(404).json({
    params: req.query,
    status: "failed",
    reason: "Wrong search parameters or server error",
  });
  res.end();
});

module.exports = peopleRoute;
