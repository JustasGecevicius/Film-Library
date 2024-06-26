import { MovieBackdropType } from 'features/movies/types';
import { Link } from 'react-router-dom';
import { Genres } from './Genres';

export const Backdrop = ({ backdrop, poster, title, genres }: MovieBackdropType) => {
  return (
    <div
      className='h-[500px] p-8 bg-center bg-cover bg-no-repeat lower-backdrop'
      style={{ backgroundImage: `url(${backdrop})` }}>
      <div className='flex-col justify-between h-full max-w-4xl mx-auto'>
        <Link to='/Film-Library/Explore'>
          <button className='p-2 text-white border border-white rounded-full'>
            Home
          </button>
        </Link>
        <div className='flex-col gap-y-2'>
          <div
            className='h-48 bg-center bg-cover rounded-xl w-36'
            style={{ backgroundImage: `url(${poster})` }}></div>
          <h2 className='text-2xl text-white'>{title}</h2>
          <Genres genres={genres} />
        </div>
      </div>
    </div>
  );
};
