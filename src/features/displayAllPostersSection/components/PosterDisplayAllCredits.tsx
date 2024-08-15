import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useMovieSeriesCredits } from '../../credits/hooks';
import { useParams } from 'react-router-dom';

export const PosterDisplayAllCredits = ({ page }: { page: number }) => {
  const { element = '', id = '' } = useParams();

  const results = useMovieSeriesCredits(element, id, page);
  return results ? (
    <div className='flex-row flex-wrap justify-between gap-4'>
      {results.map((elem, index) => (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
        />
      ))}
    </div>
  ) : null;
};
