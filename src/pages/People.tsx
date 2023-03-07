// Components
import { SearchAreaPeople } from "features/searchArea/components/searchPeople/SearchAreaPeople";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
// Hooks
import {
  usePeopleLikedByFriends,
  usePopularPeople,
} from "features/people/hooks";

export const People = () => {
  // Getting the popular people
  const popularPeople = usePopularPeople();
  const peopleLikedByFriends = usePeopleLikedByFriends();

  return (
    <>
      {popularPeople && peopleLikedByFriends && (
        <>
          <SearchAreaPeople />
          <div className="posterDisplaysWrapper">
            <PosterDisplayPeople
              arr={popularPeople}
              sectionName="Popular People"
              link="Popular"
            />
            <PosterDisplayPeople
              arr={peopleLikedByFriends}
              sectionName="Your Friends Like..."
              link="FriendLiked"
            />
          </div>
        </>
      )}
    </>
  );
};
