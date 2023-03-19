const axios = require("axios");

const moviedbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

module.exports = moviedbApi;
