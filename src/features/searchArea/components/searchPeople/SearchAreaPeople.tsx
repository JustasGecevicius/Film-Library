import { Header } from '../../../header/components/Header';
import { SearchBarPeople } from '../searchBars/SearchBarPeople';
import { useSearchAreaImages } from '../../../searchArea/hooks';
import { Fade } from 'react-slideshow-image';
import { DarkBackground } from '../../../utils/DarkBackground';

export const SearchAreaPeople = () => {
  const links = useSearchAreaImages();

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
        <SearchBarPeople />
      </div>
    </div>
  );
};
