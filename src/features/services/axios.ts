import axios from "axios"
// Creating base api call that can later have urls added to it
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export {api};
