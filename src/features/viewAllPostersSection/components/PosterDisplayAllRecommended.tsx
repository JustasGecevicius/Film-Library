import { Poster } from "features/displayPostersSection/components/Poster";
import { MovieObject } from "features/movies/types";
import { useRecommended } from "features/showMovieAndSeries/hooks";
import { useEffect, useState } from "react";

interface Props {
  type: "movie" | "series";
  page: number;
  id: number | undefined
}

export const PosterDisplayAllRecommended = ({ id, type, page }: Props) => {
  const results = useRecommended(id, page, type);
  const [combinedResults, setCombinedResults] = useState<MovieObject[]>();
  useEffect(() => {
    if (!results) return;
    setCombinedResults((prev) => {
      return prev ? [...prev, ...results] : [...results];
    });
  }, [results]);

  return combinedResults ? (
    <div className="movieHolderAll">
      {combinedResults.map((elem, index) => {
        return (
          <Poster
            key={index}
            imageURL={elem.imageURL}
            title={elem.title}
            release_date={elem.release_date}
            id={elem.id}
            liked={elem.liked}
            rating={elem.rating}
            type={type}
          ></Poster>
        );
      })}
    </div>
  ) : null;
};