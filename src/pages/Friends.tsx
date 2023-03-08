// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaFriends } from "features/searchArea/components/searchFriends/SearchAreaFriends";
// Hooks
import {
  useActiveFriends,
  useFetchFriendLikedMovies,
  useFriendLikedSeries,
  useFetchFriendRatedMovies,
  useFetchFriendRatedSeries,
} from "features/friends/hooks";
// Styles
import { PosterDisplayFriends } from "features/displayPostersSection/components/PosterDisplayFriends";
import { User } from "features/displayPostersSection/types";
import { NoUser } from "./NoUser";

export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendLikedSeries = useFriendLikedSeries();
  const friendRatedMovies = useFetchFriendRatedMovies();
  const friendRatedSeries = useFetchFriendRatedSeries();
  const activeFriends = useActiveFriends() as User[];
  return (
    <>
      {friendLikedMovies &&
      friendLikedSeries &&
      friendRatedMovies.filteredMoviesList &&
      friendRatedSeries.filteredSeriesList &&
      activeFriends ? (
        <>
          <SearchAreaFriends></SearchAreaFriends>
          <div className="posterDisplaysWrapper">
            <h2 className="typeName"> Movies </h2>
            <PosterDisplayMoviesSeries
              arr={friendLikedMovies}
              sectionName="Popular With Friends"
              type="movie"
              link="all/movie/Popular With Friends"
            />
            <PosterDisplayMoviesSeries
              arr={friendRatedMovies.filteredMoviesList}
              sectionName="Rated by Friends"
              type="movie"
              link="all/movie/Rated by Friends"
            />
            <h2 className="typeName"> Series </h2>
            <PosterDisplayMoviesSeries
              arr={friendLikedSeries}
              sectionName="Popular With Friends"
              type="series"
              link="all/series/Popular With Friends"
            />
            <PosterDisplayMoviesSeries
              arr={friendRatedSeries.filteredSeriesList}
              sectionName="Rated by Friends"
              type="series"
              link="all/series/Rated by Friends"
            />
            <PosterDisplayFriends
              users={activeFriends}
              sectionName="Active Friends"
            />
          </div>
        </>
      ) : <NoUser />
      }
    </>
  );
};
