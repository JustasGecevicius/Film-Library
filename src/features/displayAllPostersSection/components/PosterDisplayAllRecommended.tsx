import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useRecommended } from '../../showMovieAndSeries/hooks';

type PropsType = {
  type: 'movie' | 'series';
  page: number;
  id: number | undefined;
};

export const PosterDisplayAllRecommended = ({ id, type }: PropsType) => {
  const { results, fetchNextPage } = useRecommended(type, id);

  return (
    <div className='flex-row flex-wrap gap-4 center'>
      {results?.map((elem, index) => {
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
  );
};
