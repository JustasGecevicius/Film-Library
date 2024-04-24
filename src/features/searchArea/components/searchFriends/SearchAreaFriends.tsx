import { Header } from '../../../header/components/Header';
import { SearchBarFriends } from '../../../searchArea/components/searchBars/SearchBarFriends';
import '../../../searchArea/css/searchArea.css';
import { useSearchAreaImages } from '../../../searchArea/hooks';
import { Fade } from 'react-slideshow-image';

export const SearchAreaFriends = () => {
  // Fetched links from firebase for the top movies
  const links = useSearchAreaImages();

  if (!links) {
    return <div>Loading...</div>;
  }
  return (
    <div className='slide-container'>
      <Fade>
        {links.map((imageLink, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={imageLink} alt='backgroundImage' />
          </div>
        ))}
      </Fade>
      <div className='slideOverlay'>
        <Header />
        <SearchBarFriends />
      </div>
    </div>
  );
};
