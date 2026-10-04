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
      className='absolute inset-x-0 z-20 flex justify-center px-4 bottom-10'
      id='search'
    >
      <div className='relative w-full max-w-3xl'>
        <div className='flex items-center w-full p-2 border shadow-2xl bg-black/75 border-white/30 rounded-2xl backdrop-blur-xl'>
          <input
            className='w-full h-12 px-4 text-lg text-white bg-transparent border-none outline-none placeholder:text-white/60'
            type='text'
            placeholder='Search actors and filmmakers'
            name='search'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {!!focus && !!query && (
          <div className='absolute left-0 right-0 z-30 p-4 mt-2 overflow-y-auto text-white border shadow-2xl top-full bg-black/95 border-white/20 max-h-80 rounded-2xl backdrop-blur-xl'>
            <SearchResultsPeople query={query} />
          </div>
        )}
      </div>
    </div>
  );
};
