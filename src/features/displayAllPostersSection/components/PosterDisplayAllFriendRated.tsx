import {
  useFetchFriendRatedMovies,
  useFetchFriendRatedSeries,
} from '../../friends/hooks';
import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';

type PropsType = {
  type: 'movie' | 'series' | undefined;
};

export const PosterDisplayAllFriendRated = ({ type }: PropsType) =>
  type === 'movie' ? (
    <PosterDisplayAllFriendRatedMovies />
  ) : (
    <PosterDisplayAllFriendRatedSeries />
  );

export const PosterDisplayAllFriendRatedMovies = () => {
  const results = useFetchFriendRatedMovies();
  return results && results.filteredMoviesList ? (
    <div className='flex-row gap-4'>
      {results.filteredMoviesList.map((elem, index) => (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
          type={'movie'}
        />
      ))}
    </div>
  ) : null;
};

export const PosterDisplayAllFriendRatedSeries = () => {
  const results = useFetchFriendRatedSeries();
  return results?.filteredSeriesList ? (
    <div className='movieHolderAll'>
      {results.filteredSeriesList.map((elem, index) => (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
          type={'series'}
        />
      ))}
    </div>
  ) : null;
};
