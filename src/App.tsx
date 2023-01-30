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
import { DB, UserContext } from "features/services/userContext";
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
                <Route
                    element={
                        <UserContext.Provider
                            value={{ signInInfo, setSignInInfo }}
                        >
                            <DB.Provider value={{ db }}>
                                <Header />
                            </DB.Provider>
                        </UserContext.Provider>
                    }
                >
                    <Route
                        path="/Film-Library"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <DB.Provider value={{ db }}>
                                    <Home />
                                </DB.Provider>
                            </UserContext.Provider>
                        }
                    >
                        <Route path=":movieId" element={<ShowMovie />}></Route>
                    </Route>
                    <Route
                        path="/Film-Library/Explore"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <DB.Provider value={{ db }}>
                                    <Explore />
                                </DB.Provider>
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route
                        path="/Film-Library/Explore/:movieId"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <ShowMovie />
                                <DB.Provider value={{ db }}></DB.Provider>
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route
                        path="/Film-Library/Friends"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <DB.Provider value={{ db }}>
                                    <Friends />
                                </DB.Provider>
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route
                        path="/Film-Library/Friends/:movieId"
                        element={<ShowMovie />}
                    />
                    <Route
                        path="/Film-Library/People"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <DB.Provider value={{ db }}>
                                    <People />
                                </DB.Provider>
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route
                        path="/Film-Library/People/:movieId"
                        element={<ShowMovie />}
                    />
                    <Route
                        path="/Film-Library/UserProfile"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <DB.Provider value={{ db }}>
                                    <UserProfile />
                                </DB.Provider>
                            </UserContext.Provider>
                        }
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
};

export { App };
