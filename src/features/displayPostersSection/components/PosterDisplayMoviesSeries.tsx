import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { Link } from 'react-router-dom';
import { MoviesPosterDisplayType, PosterType } from '../types';

interface Link {
  link: string;
}
export const PosterDisplayMoviesSeries = ({
  arr,
  sectionName,
  type,
  id,
  link,
}: MoviesPosterDisplayType & PosterType & Link) => {
  return (
    <div className='overflow-x-auto py-8'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='font-bold text-2xl italic'>{sectionName}</h2>
        <Link to={`/Film-Library/${link}`}>
          <button className='px-2 border border-black rounded-full dark:border-white dark:bg-black h-7'>
            View All
          </button>
        </Link>
      </div>
      <div className='flex flex-row gap-x-4 overflow-auto py-4'>
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
              type={type}></PosterMovieSeries>
          );
        })}
      </div>
    </div>
  );
};
