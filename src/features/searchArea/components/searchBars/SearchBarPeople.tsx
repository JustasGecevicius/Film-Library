import { useState } from 'react';
import { useFocus } from '../../hooks';
import { SearchResultsPeople } from '../searchPeople/SearchResultsPeople';

export const SearchBarPeople = () => {
  // State to track user input
  const [query, setQuery] = useState('');
  // Check whether user clicked inside/outside of the search bar
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
      {!!focus && !!query && (
        <div className='absolute w-full pt-4 overflow-y-auto bg-white dark:bg-black top-5 max-h-80 rounded-b-2xl'>
          <SearchResultsPeople query={query} />
        </div>
      )}
    </div>
  );
};
