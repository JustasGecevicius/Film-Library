// Pages
import { Home } from "./pages/Home";
import { Explore } from "pages/Explore";
import { Friends } from "pages/Friends";
import { People } from "pages/People";
import { UserProfile } from "pages/UserProfile";
import { ShowMovie } from "pages/ShowMovie";
import { ShowSeries } from "pages/ShowSeries";
import { ShowAll } from "pages/ShowAll";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Firebase
import { initializeApp } from "firebase/app";
// Styles
import "./css/app.css";
// Config 
import config from "./features/services/config";



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
      </Routes>
    </div>
  );
};

export { App };
