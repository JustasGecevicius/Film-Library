/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from "./sections/Header";
import React, { createContext, useContext, useEffect, useState } from "react";
import "./css/app.css";
import { SearchArea } from "./components/SearchArea";
import { Home } from "./pages/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Router,
    useFetcher,
} from "react-router-dom";
import { Explore } from "pages/Explore";
import { Friends } from "pages/Friends";
import { People } from "pages/People";
import { UserProfile } from "pages/UserProfile";
import { SearchBar } from "components/SearchBar";
import { initializeApp } from "firebase/app";
import config from "./services/config";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { UserContext } from "services/userContext";

const App: React.FC = () => {
    const [signInInfo, setSignInInfo] = useState({});
    const app = initializeApp(config);
    const location = useLocation();

    useEffect(() => {
        console.log(signInInfo);
    }, [signInInfo]);

    return (
        <div className="App">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/Film-Library"
                    element={
                        <UserContext.Provider
                            value={{ signInInfo, setSignInInfo }}
                        >
                            <Header />{" "}
                        </UserContext.Provider>
                    }
                >
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
                    <Route
                        path="/Film-Library/Friends"
                        element={
                            <UserContext.Provider
                                value={{ signInInfo, setSignInInfo }}
                            >
                                <Friends />
                            </UserContext.Provider>
                        }
                    ></Route>
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
