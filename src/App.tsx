import { Routes, Route, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import './css/app.css';
import './features/searchArea/css/searchArea.css';
import config from './features/services/config';
// import { ShowAllFriends } from './pages/ShowAllFriends';
import { useFirebaseContext } from './features/context/FirebaseContext';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('././pages/Home'));
const Explore = lazy(() => import('././pages/Explore'));
const Friends = lazy(() => import('././pages/Friends'));
const People = lazy(() => import('././pages/People'));
const ShowMovie = lazy(() => import('././pages/ShowMovie'));
const ShowSeries = lazy(() => import('././pages/ShowSeries'));
const ShowPerson = lazy(() => import('././pages/ShowPerson'));
const UserProfile = lazy(() => import('././pages/UserProfile'));
const ShowUser = lazy(() => import('././pages/User'));
const ShowAll = lazy(() => import('././pages/ShowAll'));
const ShowAllPeople = lazy(() => import('././pages/ShowAllPeople'));
const ShowAllUserLikedRated = lazy(
  () => import('././pages/ShowAllUserLikedRated')
);
const ComponentTest = lazy(() => import('././pages/ComponentTest'));

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

export const App = () => {
  console.log('RANSDOM CHANGE TO TEST');
  initializeApp(config);
  const location = useLocation();
  const { darkTheme } = useFirebaseContext();

  return (
    <div
      className={`App ${darkTheme ? 'dark' : 'light'} dark:text-white min-h-screen h-screen`}
    >
      <Routes location={location} key={location.pathname}>
        <Route
          path='/Film-Library'
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/explore'
          element={
            <Suspense>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/friends'
          element={
            <Suspense>
              <Friends />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/people'
          element={
            <Suspense>
              <People />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/user_profile'
          element={
            <Suspense>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/movie/:id'
          element={
            <Suspense>
              <ShowMovie />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/series/:id'
          element={
            <Suspense>
              <ShowSeries />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/person/:id'
          element={
            <Suspense>
              <ShowPerson />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/all/:element/:type/:id'
          element={
            <Suspense>
              <ShowAll />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/all/:element/:type'
          element={
            <Suspense>
              <ShowAll />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/all/people/:type/:subElement/:id'
          element={
            <Suspense>
              <ShowAllPeople />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/all/people/:type/:id'
          element={
            <Suspense>
              <ShowAllPeople />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/all/people/:type'
          element={
            <Suspense>
              <ShowAllPeople />
            </Suspense>
          }
        />
        {/* <Route path='/Film-Library/all/:element' element={<ShowAllFriends />} /> */}
        <Route
          path='/Film-Library/user/:element/:type'
          element={
            <Suspense>
              <ShowAllUserLikedRated />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/user/:id'
          element={
            <Suspense>
              <ShowUser />
            </Suspense>
          }
        />
        <Route
          path='/Film-Library/test'
          element={
            <Suspense>
              <ComponentTest />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
