import { Home } from '././pages/Home';
import { Explore } from './pages/Explore';
import { Friends } from './pages/Friends';
import { People } from './pages/People';
import { ShowMovie } from './pages/ShowMovie';
import { ShowSeries } from './pages/ShowSeries';
import { ShowAll, ShowAllPeople } from './pages/ShowAll';
import { Routes, Route, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import './css/app.css';
import './features/searchArea/css/searchArea.css';
import config from './features/services/config';
import { ShowPerson } from './pages/ShowPerson';
import { UserProfile } from './pages/UserProfile';
import { ShowAllFriends } from './pages/ShowAllFriends';
import { ShowAllUserLikedRated } from './pages/ShowAllUserLikedRated';
import { ComponentTest } from './pages/ComponentTest';
import { ShowUser } from './pages/User';
import { useFirebaseContext } from './features/context/FirebaseContext';

export type AvailableElements = 'movie' | 'series' | 'people';
export type AvailableTypes = '';

export type RouterPropsType = {
  id?: string;
  element?: AvailableElements;
  section?: AvailableTypes;
};

export const ALL_ELEMENTS = ['movie', 'series', 'person'] as const;
export const ALL_ELEMENTS_NO_PERSON = ['movie', 'series'] as const;
export const BASIC_TYPES = [
  'top',
  'popular',
  'recommended',
  'credits',
] as const;
export const PEOPLE_TYPES = ['friend', 'popular', 'cast'] as const;
export const SUB_ELEMENTS = ['movie', 'series'] as const;

export type Element = (typeof ALL_ELEMENTS)[number];
export type ElementNoPerson = (typeof ALL_ELEMENTS_NO_PERSON)[number];
export type BasicType = (typeof BASIC_TYPES)[number];
export type PeopleType = (typeof PEOPLE_TYPES)[number];
export type SubElement = (typeof SUB_ELEMENTS)[number];

const App = () => {
  initializeApp(config);
  const location = useLocation();
  const { darkTheme } = useFirebaseContext();

  return (
    <div
      className={`App ${darkTheme ? 'dark' : 'light'} dark:text-white min-h-screen h-screen`}
    >
      <Routes location={location} key={location.pathname}>
        <Route path='/film_library' element={<Home />} />
        <Route path='/film_library/explore' element={<Explore />} />
        <Route path='/film_library/friends' element={<Friends />} />
        <Route path='/film_library/people' element={<People />} />
        <Route path='/film_library/user_profile' element={<UserProfile />} />
        <Route path='/film_library/movie/:id' element={<ShowMovie />} />
        <Route path='/film_library/series/:id' element={<ShowSeries />} />
        <Route path='/film_library/person/:id' element={<ShowPerson />} />
        <Route
          path='/film_library/all/:element/:type/:id'
          element={<ShowAll />}
        />
        <Route path='/film_library/all/:element/:type' element={<ShowAll />} />
        <Route
          path='/film_library/all/people/:type/:subElement/:id'
          element={<ShowAllPeople />}
        />
        <Route
          path='/film_library/all/people/:type/:id'
          element={<ShowAllPeople />}
        />
        <Route
          path='/film_library/all/people/:type'
          element={<ShowAllPeople />}
        />
        {/* <Route path='/film_library/all/:element' element={<ShowAllFriends />} /> */}
        <Route
          path='/film_library/user/:element/:type'
          element={<ShowAllUserLikedRated />}
        />
        <Route path='/film_library/user/:id' element={<ShowUser />} />
        <Route path='/film_library/test' element={<ComponentTest />} />
      </Routes>
    </div>
  );
};

export { App };
