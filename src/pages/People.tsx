import { SearchAreaPeople } from '../features/searchArea/components/searchPeople/SearchAreaPeople';
import { PosterDisplayPeople } from '../features/displayPostersSection/components/PosterDisplayPeople';
import {
  usePeopleLikedByFriends,
  usePopularPeople,
} from '../features/people/hooks';
import {
  useElementScrollListener,
  useHorizontalScrollListenerCallback,
} from '../features/displayAllPostersSection/hooks/scrollHooks';
import { useMemoDebounce } from '../hooks';
import { useState } from 'react';

export const People = () => {
  // Getting the popular people
  // const peopleLikedByFriends = usePeopleLikedByFriends();

  return (
    <>
      {/* {popularPeople && peopleLikedByFriends && ( */}
      <div className='flex-col h-full dark:bg-black'>
        <SearchAreaPeople />
        <div className='p-8'>
          <PosterDisplayPeople type='pop' link='popular' />
          {/* <PosterDisplayPeople
              arr={peopleLikedByFriends.slice(0, 19)}
              sectionName='Your Friends Like...'
              link='FriendLiked'
            /> */}
        </div>
      </div>
      {/* )} */}
    </>
  );
};
