/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from "./reusableComponents/Header";
import React, { useEffect, useState } from "react";
import "./css/app.css";
import { Home } from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Explore } from "pages/explore/Explore";
import { Friends } from "pages/friends/Friends";
import { People } from "pages/people/People";
import { UserProfile } from "pages/userProfile/UserProfile";
import { initializeApp } from "firebase/app";
import config from "./features/services/config";
//import { DB, UserContext } from "features/services/userContext";
import { getFirestore } from "firebase/firestore";
import { ShowMovie } from "pages/showMovie/ShowMovie";

const App: React.FC = () => {
  const [signInInfo, setSignInInfo] = useState({});
  const app = initializeApp(config);
  const db = getFirestore(app);
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route element={<Header />}>
          <Route path="/Film-Library" element={<Home />}>
            <Route path=":movieId" element={<ShowMovie />}></Route>
          </Route>
          <Route path="/Film-Library/Explore" element={<Explore />}></Route>
          <Route
            path="/Film-Library/Explore/:movieId"
            element={<ShowMovie />}
          ></Route>
          <Route path="/Film-Library/Friends" element={<Friends />}></Route>
          <Route
            path="/Film-Library/Friends/:movieId"
            element={<ShowMovie />}
          />
          <Route path="/Film-Library/People" element={<People />}></Route>
          <Route path="/Film-Library/People/:movieId" element={<ShowMovie />} />
          <Route
            path="/Film-Library/UserProfile"
            element={<UserProfile />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export { App };
