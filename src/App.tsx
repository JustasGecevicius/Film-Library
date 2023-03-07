// Pages
import { Home } from "./pages/Home";
import { Explore } from "pages/Explore";
import { Friends } from "pages/Friends";
import { People } from "pages/People";
import { ShowMovie } from "pages/ShowMovie";
import { ShowSeries } from "pages/ShowSeries";
import { ShowAll } from "pages/ShowAll";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Firebase
import { initializeApp } from "firebase/app";
// Styles
import "css/app.css";
// Config
import config from "./features/services/config";
import { ShowPerson } from "pages/ShowPerson";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProfile } from "pages/UserProfile";
import { ShowAllPeople } from "pages/ShowAllPeople";
import { ShowAllFriends } from "pages/ShowAllFriends";


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
        <Route path="/Film-Library/all/:type/:section" element={<ShowAll />} />
        <Route
          path="/Film-Library/all/:type/:section/:id"
          element={<ShowAll />}
        />
        <Route path="/Film-Library/person/:id" element={<ShowPerson />} />
        <Route
          path="/Film-Library/allPeople/:section"
          element={<ShowAllPeople />}
        />
        <Route
          path="/Film-Library/allFriends"
          element={<ShowAllFriends />}
        />
      </Routes>
      <ReactQueryDevtools />
    </div>
  );
};

export { App };
