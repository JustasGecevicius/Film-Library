import axios from "axios"
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const TopRatedApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
})

export {api, TopRatedApi};
