import { useState } from 'react';
import { useFocus } from '../../hooks';
import { SearchResultsMovies } from '../searchMoviesSeries/SearchResultsMovies';
import { SearchResultsSeries } from '../searchMoviesSeries/SearchResultsSeries';
import { SearchTypeSwitch } from '../SearchTypeSwitch';

export const SearchBarMoviesSeries = () => {
  // State to track user input
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'movie' | 'series'>('movie');
  // Check whether user clicked inside/outside of the search bar
  const focus = useFocus();

  return (
    <div
      className='absolute inset-x-0 z-20 flex justify-center px-4 bottom-10'
      id='search'
    >
      <div className='relative w-full max-w-3xl'>
        <div className='flex items-center w-full gap-3 p-2 border shadow-2xl bg-black/75 border-white/30 rounded-2xl backdrop-blur-xl'>
          <input
            type='text'
            placeholder='Search movies and series'
            name='search'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className='w-full min-w-0 h-12 px-4 text-lg text-white bg-transparent border-none outline-none placeholder:text-white/60'
          />
          <SearchTypeSwitch setType={setType} />
        </div>
        {!!focus && !!query && (
          <div className='absolute left-0 right-0 z-30 p-4 mt-2 overflow-y-auto text-white border shadow-2xl top-full bg-black/95 border-white/20 max-h-80 rounded-2xl backdrop-blur-xl'>
            {type === 'movie' ? (
              <SearchResultsMovies query={query} />
            ) : (
              <SearchResultsSeries query={query} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
