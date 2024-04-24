import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { MovieObject } from '../../movies/types';
import { useEffect, useState } from 'react';
import { useTop } from '../../topRated/hooks';
import '../../displayAllPostersSection/css/posterDisplayAll.css';

interface Props {
  type: 'movie' | 'series';
  page: number;
}

export const PosterDisplayAllTop = ({ type, page }: Props) => {
  const results = useTop(type, page);
  const [combinedResults, setCombinedResults] = useState<MovieObject[]>();
  useEffect(() => {
    if (!results) return;
    setCombinedResults((prev) => {
      return prev ? [...prev, ...results] : [...results];
    });
  }, [results]);
  return (
    <>
      {combinedResults && (
        <div className='movieHolderAll'>
          {combinedResults.map((elem, index) => {
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
              />
            );
          })}
        </div>
      )}
    </>
  );
};
