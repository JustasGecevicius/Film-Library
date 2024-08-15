import { Header } from '../../header/components/Header';
import { SearchBarMoviesSeries } from '../../searchArea/components/searchBars/SearchBarMoviesSeries';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { SearchBarFriends } from './searchBars/SearchBarFriends';
import { SearchBarPeople } from './searchBars/SearchBarPeople';
import { DarkBackground } from '../../utils/DarkBackground';

import '../../searchArea/css/searchArea.css';
export type SearchAreaPropsType = {
  links: string[];
  type: 'movieSeries' | 'friends' | 'cast' | 'people';
  SearchBar?: JSX.Element;
};

export const SearchArea = ({ links, type }: SearchAreaPropsType) => {
  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className='slide-container'>
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
      <div className='slideOverlay'>
        <Header />
        <DarkBackground />
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
