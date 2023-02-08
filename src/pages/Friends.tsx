import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import { useFetchFriendMovies } from "features/friends/hooks";
import { SearchAreaPeople } from "features/searchArea/components/SearchAreaPeople";
import "../css/popularMovies.css";

export const Friends = () => {
  const friendMovies = useFetchFriendMovies();

  return (
    <>
      <SearchAreaPeople></SearchAreaPeople>
      {friendMovies ? (
        <PosterDisplayMovies
          arr={friendMovies}
          sectionName="Popular With Friends"
        ></PosterDisplayMovies>
      ) : null}
    </>
  );
};
