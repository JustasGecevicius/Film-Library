/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from "./sections/header/Header";
import React, { useEffect, useState } from "react";
import "./css/app.css";
import { Home } from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Explore } from "pages/explore/Explore";
import { Friends } from "pages/friends/Friends";
import { People } from "pages/people/People";
import { UserProfile } from "pages/userProfile/UserProfile";
import { initializeApp } from "firebase/app";
import config from "./services/config";
import { UserContext } from "services/userContext";
import { ShowMovie } from "reusableComponents/showMovie/ShowMovie";

const App: React.FC = () => {
    const [signInInfo, setSignInInfo] = useState({});
    const app = initializeApp(config);
    const location = useLocation();

    return (
        <div className="App">
            <Routes location={location} key={location.pathname}>
                <Route
                    element={
                        <UserContext.Provider
                            value={{ signInInfo, setSignInInfo }}
                        >
                            <Header />
                        </UserContext.Provider>
                    }
                >
                    <Route
                        path="/Film-Library"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <Home />
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
                                <Explore />
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route path="/Film-Library/Explore/:movieId" element={<ShowMovie />}>

                    </Route>
                    <Route
                        path="/Film-Library/Friends"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <Friends />
                            </UserContext.Provider>
                        }
                    >
                    </Route>
                    <Route path="/Film-Library/Friends/:movieId" element={<ShowMovie />}/>
                    <Route
                        path="/Film-Library/People"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <People />
                            </UserContext.Provider>
                        }
                    ></Route>
                    <Route path="/Film-Library/People/:movieId" element={<ShowMovie />}/>
                    <Route
                        path="/Film-Library/UserProfile"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <UserProfile />
                            </UserContext.Provider>
                        }
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
};

export { App };
