const express = require("express");
const moviedbApi = require("../axios");
const axios = require("axios");
const admin = require("firebase-admin");
const { doc, getDoc } = require("firebase-admin/firestore");
const { checkIfLiked, checkIfRated } = require("../utils");
const userFriendsRoute = express.Router();
const base_url = require("../baseURL");

userFriendsRoute.get("/", async (req, res) => {
  try{
    // Initialising the Firestore app
    const db = admin.firestore();
  
      // URL search parameters
      const { userId, type, option } = req.query;
      // type="movie/series" option="rated/liked"

      const dataPromise = userId ? db.doc(`friends/${userId}`).get() : undefined;
        
      const data = await dataPromise;
      const friendsDataPromises = Object.values(data.data()).map(elem => {
        return db.doc(`users/${elem}`).get();
      })
      
      const friendsDataSnapshots = await Promise.all(friendsDataPromises);
      const friendsData = friendsDataSnapshots.map(elem => {
        return elem.data();
      })
      res.status(200).json(friendsData)
    
    if (userId && type && option){
      
    }
  }
  catch (error) {
    console.log("Error encountered", error);
    res.status(500).json({
      params: req.query,
      status: "failed",
      reason: "internal server error",
      error: error,
    });
  }

    
})

module.exports = userFriendsRoute;