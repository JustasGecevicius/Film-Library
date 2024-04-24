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
    <div className='section'>
      <div className='sectionInfo'>
        <h2 className='sectionName'>{sectionName}</h2>
        <Link to={`/Film-Library/all/${type}/Credits/${id}`}>
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
