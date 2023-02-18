
// Components
import { SearchAreaPeople } from "features/searchArea/components/searchPeople/SearchAreaPeople";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
// Hooks
import { usePopularPeople } from "features/people/hooks";

export const People = () => {
  // Getting the popular people
  const popularPeople = usePopularPeople();

  return (
    <>
      <SearchAreaPeople />
      {popularPeople ? (
        <PosterDisplayPeople arr={popularPeople} sectionName="Popular People" />
      ) : null}
    </>
  );
};
