import './css/showAll.css';

import { SearchAreaFriends } from '../features/searchArea/components/searchFriends/SearchAreaFriends';
import { useActiveFriends } from '../features/friends/hooks';
import { User } from '../features/displayPostersSection/types';
import { UserPoster } from '../features/poster/components/UserPoster';

export const ShowAllFriends = () => {
  const activeFriends = useActiveFriends() as User[];

  return (
    <div className='showAll'>
      <SearchAreaFriends />
      <div className='posterDisplayAllWrapper'>
        <h2 className='sectionName'>Friends</h2>
        {activeFriends && (
          <div className='movieHolderAll'>
            {activeFriends.map((elem, index) => {
              return (
                <UserPoster
                  key={index}
                  imageURL={elem.profileURL}
                  name={elem.name}
                  id={elem.uid}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
