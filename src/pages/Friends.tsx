// Components
import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import { SearchAreaFriends } from "features/searchArea/components/SearchAreaFriends";
// Hooks
import { useFetchFriendLikedMovies } from "features/friends/hooks";
// Styles
import "../css/popularMovies.css";

export const Friends = () => {
  // Getting movies liked by Friends
  const friendLikedMovies = useFetchFriendLikedMovies();

  return (
    <>
      <SearchAreaFriends></SearchAreaFriends>
      {friendLikedMovies ? (
        <PosterDisplayMovies
          arr={friendLikedMovies}
          sectionName="Popular With Friends"
          type="movie"
        ></PosterDisplayMovies>
      ) : null}
    </>
  );
};
