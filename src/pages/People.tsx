import "../css/popularMovies.css";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
import { SearchArea } from "features/searchArea/components/SearchArea";
import { usePopularPeople } from "features/people/hooks";

export const People = () => {

  const popularPeople = usePopularPeople();

  return (
    <>
    <SearchArea/>
      {popularPeople ? (
        <PosterDisplayPeople
          arr={popularPeople}
          sectionName="Popular People"
        />
      ) : null}
    </>
  );
};
