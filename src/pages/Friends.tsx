// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaFriends } from "features/searchArea/components/searchFriends/SearchAreaFriends";
// Hooks
import { useFetchFriendLikedMovies, useFetchFriendLikedSeries } from "features/friends/hooks";
// Styles
import "pages/css/friends.css"

export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendLikedSeries = useFetchFriendLikedSeries();

  console.log(friendLikedMovies, friendLikedSeries);

  return (
    <>
      <SearchAreaFriends></SearchAreaFriends>
      <div className="friendsWrapper">
        {friendLikedMovies ? (
          <PosterDisplayMoviesSeries
            arr={friendLikedMovies}
            sectionName="Popular With Friends"
            type="movie"
          ></PosterDisplayMoviesSeries>
        ) : null}
        <h2> Series </h2>
        {friendLikedSeries ? (
          <PosterDisplayMoviesSeries
            arr={friendLikedSeries}
            sectionName="Popular With Friends"
            type="series"
          ></PosterDisplayMoviesSeries>
        ) : null}
      </div>
    </>
  );
};
