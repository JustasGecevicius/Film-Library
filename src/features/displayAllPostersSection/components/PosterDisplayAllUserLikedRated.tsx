import { useFirebaseContext } from '../../context/FirebaseContext';
import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useUserLiked, useUserRated } from '../../profile/hooks';

type PropsType = {
  type?: 'movie' | 'series';
  section?: 'liked' | 'rated';
};

export const PosterDisplayAllUserLikedRated = ({
  type,
  section,
}: PropsType) => {
  if (!type) return null;
  return section === 'liked' ? (
    <PosterDisplayAllUserLikedMoviesSeries type={type} />
  ) : (
    <PosterDisplayAllUserRatedMoviesSeries type={type} />
  );
};

type TypeType = {
  type: 'movie' | 'series';
};

export const PosterDisplayAllUserLikedMoviesSeries = ({ type }: TypeType) => {
  const { userInfo } = useFirebaseContext();
  const results = useUserLiked(type, userInfo?.uid);
  return (
    <div className='flex-row flex-wrap justify-between gap-4'>
      {results?.map((elem, index) => (
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
  );
};

export const PosterDisplayAllUserRatedMoviesSeries = ({ type }: TypeType) => {
  const { userInfo } = useFirebaseContext();
  const results = useUserRated(type, userInfo?.uid);
  return (
    <div className='flex-row flex-wrap justify-between gap-4'>
      {results?.map((elem, index) => (
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
  );
};
