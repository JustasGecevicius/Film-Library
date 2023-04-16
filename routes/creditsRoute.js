const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const creditsRoute = express.Router();
const base_url = require("../baseURL");

creditsRoute.get("/", async (req, res) => {
  try {
    console.log("here");
    // Initialising the Firestore app
    const db = admin.firestore();

    // URL search parameters
    const { type, id, userId, option } = req.query;

    // TMDB promises
    const dataPromise = id
      ? type === "person"
        ? moviedbApi.get(
            `/person/${id}/${option}_credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
          )
        : type === "movie" || "tv"
        ? moviedbApi.get(
            `/${type}/${id}/credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
          )
        : undefined
      : undefined;

    const {data} = await dataPromise;

    // The configured data ready to be returned
    const configuredData = data.cast.map((elem) => {
      return {
        title: elem.title || elem.name,
        poster_path: `${base_url}${elem.profile_path}`,
        release_date: elem.release_date || elem.first_air_date || null,
        id: elem.id,
      };
    });
    res.status(200).json(configuredData);

  } catch (error){
    console.log("Error encountered", error);
    res.status(500).json({
      params: req.query,
      status: "failed",
      reason: "internal server error",
      error: error,
    });
  }
});

module.exports = creditsRoute;
