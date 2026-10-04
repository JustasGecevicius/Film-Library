import { Header } from '../../../header/components/Header';
import { SearchBarPeople } from '../searchBars/SearchBarPeople';
import { useSearchAreaImages } from '../../../searchArea/hooks';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const SearchAreaPeople = () => {
  const links = useSearchAreaImages();

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
      <div className='absolute inset-0 z-40 bg-black/50'>
        <Header />
        <div className='absolute inset-x-0 px-4 text-center text-white top-44'>
          <p className='mb-3 text-xs font-bold tracking-widest uppercase text-white/70'>
            People
          </p>
          <h1 className='max-w-4xl mx-auto text-4xl font-extrabold tracking-tight sm:text-6xl'>
            Discover the people behind the stories
          </h1>
        </div>
        <SearchBarPeople />
      </div>
    </div>
  );
};
