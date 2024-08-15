import { useParams } from 'react-router-dom';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { PosterDisplayAllUserLikedRated } from '../features/displayAllPostersSection/components/PosterDisplayAllUserLikedRated';
import { SearchArea } from '../features/searchArea/components/SearchArea';

interface Params {
  type?: 'liked' | 'rated';
  element?: 'movie' | 'series';
  // id?: number;
}

export const ShowAllUserLikedRated = () => {
  const links = useSearchAreaImages();
  const { type, element } = useParams<keyof Params>() as Params;
  return (
    <div className='dark:bg-black'>
      <SearchArea links={links} type={'movieSeries'} />
      <div className='flex-col gap-4 p-8'>
        <h2 className='text-2xl font-bold'>{`${type} ${
          element === 'movie' ? 'Movies' : 'Series'
        }`}</h2>
        <PosterDisplayAllUserLikedRated type={element} section={type} />
      </div>
    </div>
  );
};
