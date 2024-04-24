// Components
import { SearchAreaPeople } from '../features/searchArea/components/searchPeople/SearchAreaPeople';
import { PosterDisplayPeople } from '../features/displayPostersSection/components/PosterDisplayPeople';
// Hooks
import { usePeopleLikedByFriends, usePopularPeople } from '../features/people/hooks';
import { useFirebaseContext } from '../features/context/FirebaseContext';

export const People = () => {
  // Getting the popular people
  const popularPeople = usePopularPeople();
  const peopleLikedByFriends = usePeopleLikedByFriends();
  const {darkTheme} = useFirebaseContext();
  return (
    <>
      {popularPeople && peopleLikedByFriends && (
        <div className={darkTheme ? "darkTheme" : "theme"}>
          <SearchAreaPeople />
          <div className="posterDisplaysWrapper">
            <PosterDisplayPeople
              arr={popularPeople}
              sectionName="Popular People"
              link="Popular"
            />
            <PosterDisplayPeople
              arr={peopleLikedByFriends.slice(0, 19)}
              sectionName="Your Friends Like..."
              link="FriendLiked"
            />
          </div>
        </div>
      )}
    </>
  );
};
