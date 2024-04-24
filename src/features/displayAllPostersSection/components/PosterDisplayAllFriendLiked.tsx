import {
  useFetchFriendLikedMovies,
  useFetchFriendLikedSeries,
} from '../../friends/hooks';
import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';

interface Props {
  type: "movie" | "series" | undefined;
}

export const PosterDisplayAllFriendLiked = ({ type }: Props) => {
  return (
    <>
      {type === "movie" ? (
        <PosterDisplayAllFriendLikedMovies />
      ) : (
        <PosterDisplayAllFriendLikedSeries />
      )}
    </>
  );
};

export const PosterDisplayAllFriendLikedMovies = () => {
  const results = useFetchFriendLikedMovies();
  return (
    <>
      {results && (
        <div className="movieHolderAll">
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
                type={"movie"}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export const PosterDisplayAllFriendLikedSeries = () => {
  const results = useFetchFriendLikedSeries();
  return (
    <>
      {results && (
        <div className="movieHolderAll">
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
                type={"series"}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
