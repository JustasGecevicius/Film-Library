import { useState } from 'react';
import { UserFound } from '../searchFriends/UserFound';
import { useFocus, useSearchFriends } from '../../hooks';

export const SearchBarFriends = () => {
  // States for search and remove Index
  const [query, setQuery] = useState('');
  const [indexToRemove, setIndexToRemove] = useState<number>(-1);

  // Hook that returns the fetched results after a certain amount of time
  const searchResults = useSearchFriends(
    query,
    700,
    indexToRemove,
    setIndexToRemove
  );
  // Hook that hides the search results if the search bar is not in focus
  const focus = useFocus();

  return (
    <div
      className='absolute max-w-xl -translate-x-1/2 bottom-11 left-1/2 flex justify-center items-center w-[calc(100%-1.5rem*2)]'
      id='search'
    >
      <div className='relative z-20 flex-row w-full max-w-xl px-1 bg-white dark:bg-black center rounded-2xl gap-x-4'>
        <input
          className='w-full h-10 px-4 text-2xl bg-white border-none dark:text-white dark:bg-black rounded-2xl'
          type='text'
          placeholder='Search'
          name='search'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className='absolute w-full pt-4 overflow-y-auto bg-white dark:bg-black top-5 max-h-80 rounded-b-2xl'>
        {searchResults?.map(
          (elem, index) =>
            !!focus && (
              <UserFound
                key={index}
                friendIndex={index}
                uid={elem.uid}
                friendName={elem.friendName}
                profileURL={elem.profileURL}
                setIndexToRemove={setIndexToRemove}
              />
            )
        )}
      </div>
    </div>
  );
};
