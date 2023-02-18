// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaFriends } from "features/searchArea/components/searchFriends/SearchAreaFriends";
// Hooks
import { useFetchFriendLikedMovies } from "features/friends/hooks";


export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();

  return (
    <>
      <SearchAreaFriends></SearchAreaFriends>
      {friendLikedMovies ? (
        <PosterDisplayMoviesSeries
          arr={friendLikedMovies}
          sectionName="Popular With Friends"
          type="movie"
        ></PosterDisplayMoviesSeries>
      ) : null}
    </>
  );
};
