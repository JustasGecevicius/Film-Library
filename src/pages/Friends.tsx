// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaFriends } from "features/searchArea/components/searchFriends/SearchAreaFriends";
// Hooks
import {
  useActiveFriends,
  useFetchFriendLikedMovies,
  useFetchFriendLikedSeries,
} from "features/friends/hooks";
// Styles
import "pages/css/friends.css";
import { PosterDisplayFriends } from "features/displayPostersSection/components/PosterDisplayUsers";
import { User } from "features/displayPostersSection/types";

export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendLikedSeries = useFetchFriendLikedSeries();
  const activeFriends = useActiveFriends() as User[];

  return (
    <>
      <SearchAreaFriends></SearchAreaFriends>
      <div className="friendsWrapper">
        {friendLikedMovies && (
          <PosterDisplayMoviesSeries
            arr={friendLikedMovies}
            sectionName="Popular With Friends"
            type="movie"
          ></PosterDisplayMoviesSeries>
        )}
        <h2> Series </h2>
        {friendLikedSeries && (
          <PosterDisplayMoviesSeries
            arr={friendLikedSeries}
            sectionName="Popular With Friends"
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
