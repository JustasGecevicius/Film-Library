import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { MoviesPosterDisplayType, PosterType } from '../../displayPostersSection/types';
import { DisplayPosterHeader } from './helperComponents';

export const PosterDisplayCredits = ({
  arr,
  sectionName,
  id,
  type,
}: MoviesPosterDisplayType & PosterType) => {
  return (
    <div className='flex-col gap-4'>
      <DisplayPosterHeader
        link={`/film_library/all/${type}/credits/${id}`}
        title={sectionName}
      />
      <div className='flex-row gap-4 overflow-x-auto'>
        {arr.map((elem, index) => (
          <PosterMovieSeries
            key={index}
            imageURL={elem.imageURL}
            title={elem.title}
            release_date={elem.release_date}
            id={elem.id}
            liked={elem.liked}
            rating={elem.rating}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};
