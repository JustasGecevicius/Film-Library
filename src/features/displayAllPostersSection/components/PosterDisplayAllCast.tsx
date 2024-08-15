import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { useMovieSeriesCast } from '../../showMovieAndSeries/hooks';
import { useParams } from 'react-router-dom';

export const PosterDisplayAllCast = () => {
  const { subElement = '', id = '' } = useParams();

  const credits = useMovieSeriesCast(subElement, id);

  return (
    <div className='flex-row flex-wrap justify-between gap-4'>
      {credits?.map((elem, index) => (
        <PeoplePoster
          key={index}
          name={elem.name}
          imageURL={elem.imageURL}
          id={elem.id}
        />
      ))}
    </div>
  );
};
