import { MovieObject } from '../../movies/types';
import { Link } from 'react-router-dom';
import star from '../../../assets/starIcon.png';
import { PosterType } from '../../displayPostersSection/types';

export const PosterMovieSeries = ({
  imageURL,
  title,
  release_date,
  id,
  liked,
  rating,
  type,
}: MovieObject & PosterType) =>
  id ? (
    <Link
      to={
        type === 'movie'
          ? `/Film-Library/movie/${id}`
          : `/Film-Library/series/${id}`
      }
      className='min-w-fit'
    >
      <div className='relative flex-col gap-y-4 max-w-44'>
        <img src={imageURL} alt='posterImage' className='rounded-lg' />
        {!!liked && (
          <img
            className='absolute right-0 m-2 max-w-6'
            src={star}
            alt='starIcon'
          />
        )}
        {!!rating && (
          <p className='absolute left-0 flex items-center justify-center p-1 m-2 text-white bg-black rounded-full w-7 h-7'>
            {rating}
          </p>
        )}
        <div className='flex-col items-center justify-between min-h-16'>
          <p className='text-center'>{title}</p>
          {!!release_date && <span className='posterDate'>{release_date}</span>}
        </div>
      </div>
    </Link>
  ) : null;
