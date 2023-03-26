const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const friendsRoute = express.Router();
const base_url = require("../baseURL");

friendsRoute.get("/", async (req, res) => {
  // Initialising the Firestore app
  const db = admin.firestore();
  // URL search parameters
  const { type, friendId, option, userId } = req.query;

  // Gets all the liked/rated movies/series
  if (type && option && userId) {
    try {
      // Promises of user liked/rated movies/series
      const userFriendsPromise = userId
        ? db.doc(`friends/${userId}`).get()
        : undefined;

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

      const allAxiosPromises = userId
        ? [userFriendsPromise, userLikedPromise, userRatedPromise]
        : undefined;

      const resolvedUserPromises = await axios.all(allAxiosPromises);

      const userFriends = resolvedUserPromises[0]
        ? resolvedUserPromises[0].data()
        : undefined;
      const userLiked = resolvedUserPromises[1]
        ? resolvedUserPromises[1].data()
        : undefined;
      const userRated = resolvedUserPromises[2]
        ? resolvedUserPromises[2].data()
        : undefined;

      const friendsMovieSeriesPromiseArray = Object.values(userFriends).map(
        (elem) =>
          db
            .doc(
              `${
                type === "movie"
                  ? option === "liked"
                    ? "likedMovies"
                    : "ratedMovies"
                  : option === "liked"
                  ? "likedSeries"
                  : "ratedSeries"
              }/${elem}`
            )
            .get()
      );

      const friendsMovieSeriesArray = await Promise.all(
        friendsMovieSeriesPromiseArray
      );
      const singleObject = {};
      friendsMovieSeriesArray.forEach((elem) => {
        Object.assign(singleObject, elem.data());
      });
      const allPromises = Object.keys(singleObject).map((elem) =>
        moviedbApi.get(
          `/${type}/${elem}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
        )
      );

      const resolvedPromises = await Promise.all(allPromises);
      const fixedResolvedPromises = resolvedPromises.map((elem) => {
        const data = elem.data;
        return {
          title: data.title || data.name,
          poster_path: base_url + data.poster_path,
          release_date: data.release_date || data.first_air_date,
          id: data.id,
          liked: userLiked ? checkIfLiked(data.id, userLiked) : null,
          rating: userRated ? checkIfRated(data.id, userRated) : null,
        };
      });
      res.status(200).json(fixedResolvedPromises);

      //     const userRatedPromise = userId
      //       ? db
      //           .doc(
      //             `${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`
      //           )
      //           .get()
      //       : undefined;

      //     // An array of all promises
      //     const allPromises = userId
      //       ? [dataPromise, userLikedPromise, userRatedPromise]
      //       : [dataPromise];

      //     // Resolved promises
      //     const resolvedPromises = await axios.all(allPromises);

      //     // Variables for the fetched data
      //     const data = resolvedPromises[0].data.results;
      //     const userLiked = userId ? resolvedPromises[1].data() : undefined;
      //     const userRated = userId ? resolvedPromises[2].data() : undefined;

      //     // The configured data ready to be returned
      //     const configuredData = data.map((elem) => {
      //       return {
      //         title: elem.title || elem.name,
      //         poster_path: base_url + elem.poster_path,
      //         release_date: elem.release_date || elem.first_air_date,
      //         id: elem.id,
      //         liked: userLiked ? checkIfLiked(elem.id, userLiked) : null,
      //         rating: userRated ? checkIfRated(elem.id, userRated) : null,
      //       };
      //     });

      //     // Response
      //     res.status(200).json(configuredData);
      //     res.end();
      //   } catch (error) {
      //     console.log("Error encountered", error);
      //     res.status(500).json({
      //       params: req.query,
      //       status: "failed",
      //       reason: "internal server error",
      //       error: error,
      //     });
      //   }

      //   return;
      // }

      // // Gets a specific movie/series
      // if (type && id && !option && !page) {
      //   // Data about the specific movie ready to be returned
      //   try {
      //     const userLikedPromise = userId
      //       ? db
      //           .doc(`${type === "movie" ? "likedMovie" : "likedSeries"}/${userId}`)
      //           .get()
      //       : undefined;

      //     const userRatedPromise = userId
      //       ? db
      //           .doc(
      //             `${type === "movie" ? "ratedMovies/" : "ratedSeries/"}${userId}`
      //           )
      //           .get()
      //       : undefined;

      //     const allPromises = userId
      //       ? [dataPromise, userLikedPromise, userRatedPromise]
      //       : [dataPromise];

      //     // The data from all promises
      //     const resolvedPromises = await axios.all(allPromises);

      //     // Variables for the fetched data
      //     const data = resolvedPromises[0].data;
      //     const userLiked = userId ? resolvedPromises[1].data() : undefined;
      //     const userRated = userId ? resolvedPromises[2].data() : undefined;

      //     // The configured data ready to be returned
      //     const configuredData = {
      //       ...data,
      //       liked: userLiked ? checkIfLiked(data.id, userLiked) : null,
      //       rating: userRated ? checkIfRated(data.id, userRated) : null,
      //       base_url,
      //     };

      //     res.status(200).json(configuredData);
      //     res.end();
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
  if (!userId && !type && !friendId && !option) {
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

module.exports = friendsRoute;
