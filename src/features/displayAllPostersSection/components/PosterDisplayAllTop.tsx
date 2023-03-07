import { PosterMovieSeries } from "features/poster/components/PosterMovieSeries";
import { MovieObject } from "features/movies/types";
import { useEffect, useState } from "react";
import { useTop } from "features/topRated/hooks";
import "features/displayAllPostersSection/css/posterDisplayAll.css";

interface Props {
  type: "movie" | "series";
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
  console.log(results);
  return (
    <>
      {combinedResults && (
        <div className="movieHolderAll">
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
