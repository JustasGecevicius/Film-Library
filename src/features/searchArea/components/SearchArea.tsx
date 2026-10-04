import type { ReactElement } from 'react';
import { Header } from '../../header/components/Header';
import { SearchBarMoviesSeries } from '../../searchArea/components/searchBars/SearchBarMoviesSeries';
import { Fade } from 'react-slideshow-image';
import { SearchBarFriends } from './searchBars/SearchBarFriends';
import { SearchBarPeople } from './searchBars/SearchBarPeople';
import { DarkBackground } from '../../utils/DarkBackground';
import '../../searchArea/css/searchArea.css';
import 'react-slideshow-image/dist/styles.css';

export type SearchAreaPropsType = {
  links: string[];
  type: 'movieSeries' | 'friends' | 'cast' | 'people';
  SearchBar?: ReactElement;
  modern?: boolean;
};

export const SearchArea = ({
  links,
  type,
  modern = false,
}: SearchAreaPropsType) => {
  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative z-10 bg-black slide-container'>
      <Fade>
        {links.map((imageLink, index) => (
          <div key={index}>
            <img
              style={{ width: '100%' }}
              src={imageLink}
              alt='backgroundImage'
            />
          </div>
        ))}
      </Fade>
      <div className={`absolute inset-0 z-40 ${modern ? 'bg-black/50' : ''}`}>
        <Header />
        {!modern && <DarkBackground />}
        {modern && (
          <div className='absolute inset-x-0 px-4 text-center text-white top-44'>
            <p className='mb-3 text-xs font-bold tracking-widest uppercase text-white/70'>
              Explore
            </p>
            <h1 className='text-4xl font-extrabold tracking-tight sm:text-6xl'>
              Find your next favorite
            </h1>
          </div>
        )}
        {(() => {
          switch (type) {
            case 'movieSeries':
              return <SearchBarMoviesSeries />;
            case 'cast':
              return <SearchBarPeople />;
            case 'friends':
              return <SearchBarFriends />;
            case 'people':
              return <SearchBarPeople />;
            default:
              return <></>;
          }
        })()}
      </div>
    </div>
  );
};
