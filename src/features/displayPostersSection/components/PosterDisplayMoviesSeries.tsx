import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { Link } from 'react-router-dom';
import { MoviesPosterDisplayType, PosterType } from '../types';
import '../css/posterDisplay.css';

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
    <div className='section'>
      <div className='sectionInfo'>
        <h2 className='sectionName'>{sectionName}</h2>
        <Link to={`/Film-Library/${link}`}>
          <button className='viewAllButton'>View All</button>
        </Link>
      </div>
      <div className='posterHolder'>
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
