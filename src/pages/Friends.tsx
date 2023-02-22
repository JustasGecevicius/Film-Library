// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaFriends } from "features/searchArea/components/searchFriends/SearchAreaFriends";
// Hooks
import {
  useActiveFriends,
  useFetchFriendLikedMovies,
  useFetchFriendLikedSeries,
  useFetchFriendRatedMovies,
  useFetchFriendRatedSeries,
} from "features/friends/hooks";
// Styles
import { PosterDisplayFriends } from "features/displayPostersSection/components/PosterDisplayFriends";
import { User } from "features/displayPostersSection/types";

export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendLikedSeries = useFetchFriendLikedSeries();
  const friendRatedMovies = useFetchFriendRatedMovies();
  const friendRatedSeries = useFetchFriendRatedSeries();
  const activeFriends = useActiveFriends() as User[];

  return (
    <>
      <SearchAreaFriends></SearchAreaFriends>
      <div className="friendsWrapper">
        <h2 className="typeName"> Movies </h2>
        {friendLikedMovies && (
          <PosterDisplayMoviesSeries
            arr={friendLikedMovies}
            sectionName="Popular With Friends"
            type="movie"
          />
        )}
        {friendRatedMovies.filteredMoviesList && (
          <PosterDisplayMoviesSeries
            arr={friendRatedMovies.filteredMoviesList}
            sectionName="Rated by Friends"
            type="series"
          />
        )}
        <h2 className="typeName"> Series </h2>
        {friendLikedSeries && (
          <PosterDisplayMoviesSeries
            arr={friendLikedSeries}
            sectionName="Popular With Friends"
            type="series"
          />
        )}
        {friendRatedSeries.filteredSeriesList &&
          friendRatedSeries.filteredSeriesList.length !== 0 && (
            <PosterDisplayMoviesSeries
              arr={friendRatedSeries.filteredSeriesList}
              sectionName="Rated by Friends"
              type="series"
            />
          )}
        {activeFriends && (
          <PosterDisplayFriends
            users={activeFriends}
            sectionName="Active Friends"
          />
        )}
      </div>
    </>
  );
};
