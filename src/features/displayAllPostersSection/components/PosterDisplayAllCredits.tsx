import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useMovieSeriesCredits } from '../../credits/hooks';

interface Props {
  type: 'movie' | 'series';
  id: number | undefined;
  page: number;
}

export const PosterDisplayAllCredits = ({ type, id, page }: Props) => {
  const results = useMovieSeriesCredits(type, id, page);
  return results ? (
    <div className='flex-row gap-x-4'>
      {results.map((elem, index) => {
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
  ) : null;
};
