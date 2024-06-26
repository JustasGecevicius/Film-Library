import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { useMovieSeriesCast } from '../../showMovieAndSeries/hooks';
import { useParams } from 'react-router-dom';

export const PosterDisplayAllCast = () => {
  const { type, id } = useParams();
  const credits = useMovieSeriesCast(type as 'movie' | 'series', id);
  return (
    !!credits && (
      <div className='flex-row gap-4'>
        {credits.map((elem, index) => {
          return (
            <PeoplePoster
              key={index}
              name={elem.name}
              imageURL={elem.imageURL}
              id={elem.id}
            />
          );
        })}
      </div>
    )
  );
};
