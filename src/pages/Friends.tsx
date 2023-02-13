import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import { useFetchFriendLikedMovies, useFetchFriendRatedMovies } from "features/friends/hooks";
import { SearchAreaPeople } from "features/searchArea/components/SearchAreaPeople";
import "../css/popularMovies.css";

export const Friends = () => {
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendRatedMovies = useFetchFriendRatedMovies();

  return (
    <>
      <SearchAreaPeople></SearchAreaPeople>
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
