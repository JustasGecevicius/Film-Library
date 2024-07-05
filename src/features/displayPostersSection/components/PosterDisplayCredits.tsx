import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { MoviesPosterDisplayType, PosterType } from '../../displayPostersSection/types';
import { Link } from 'react-router-dom';

export const PosterDisplayCredits = ({
  arr,
  sectionName,
  id,
  type,
}: MoviesPosterDisplayType & PosterType) => {
  return (
    <div className='flex-col gap-4'>
      <div className='flex-row justify-between'>
        <h2 className='text-2xl font-bold'>{sectionName}</h2>
        <Link to={`/Film-Library/all/${type}/Credits/${id}`}>
          <button className='px-2 border-2 rounded-xl hover:bg-white hover:text-black hover:border-black dark:hover:border-inherit'>
            View All
          </button>
        </Link>
      </div>
      <div className='flex-row gap-4 overflow-x-auto'>
        {arr.map((elem, index) => {
          return (
            <PosterMovieSeries
              key={index}
              imageURL={elem.imageURL}
              title={elem.title}
              release_date={elem.release_date}
              id={elem.id}
              liked={elem.liked}
              rating={elem.rating}
              type={type}
            ></PosterMovieSeries>
          );
        })}
      </div>
    </div>
  );
};
