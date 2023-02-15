/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from "./features/header/components/Header";
import React, { useEffect, useState } from "react";
import "./css/app.css";
import { Home } from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Explore } from "pages/Explore";
import { Friends } from "pages/Friends";
import { People } from "pages/People";
import { UserProfile } from "pages/UserProfile";
import { initializeApp } from "firebase/app";
import config from "./features/services/config";
//import { DB, UserContext } from "features/services/userContext";
import { getFirestore } from "firebase/firestore";
import { ShowMovie } from "pages/ShowMovie";
import { ShowSeries } from "pages/ShowSeries";

const App: React.FC = () => {
  initializeApp(config);
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/Film-Library" element={<Home />} />
        <Route path="/Film-Library/Explore" element={<Explore />} />
        <Route path="/Film-Library/Friends" element={<Friends />} />
        <Route path="/Film-Library/People" element={<People />} />
        <Route path="/Film-Library/UserProfile" element={<UserProfile />} />
        <Route path="/Film-Library/movie/:id" element={<ShowMovie />} />
        <Route path="/Film-Library/series/:id" element={<ShowSeries />} />
      </Routes>
    </div>
  );
};

export { App };
