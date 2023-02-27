
// Components
import { SearchAreaPeople } from "features/searchArea/components/searchPeople/SearchAreaPeople";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
// Hooks
import { usePeopleLikedByFriends, usePopularPeople } from "features/people/hooks";

export const People = () => {
  // Getting the popular people
  const popularPeople = usePopularPeople();
  const peopleLikedByFriends = usePeopleLikedByFriends();
  console.log(peopleLikedByFriends);

  return (
    <>
      <SearchAreaPeople />
      {popularPeople && (
        <PosterDisplayPeople arr={popularPeople} sectionName="Popular People" />
      )}
      {peopleLikedByFriends && (
        <PosterDisplayPeople arr={peopleLikedByFriends} sectionName="Your Friends Like..." />
      )}
    </>
  );
};
