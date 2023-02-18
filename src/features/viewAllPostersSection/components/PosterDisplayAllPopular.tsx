import { Poster } from "features/displayPostersSection/components/Poster";
import { MovieObject } from "features/movies/types";
import { usePopular } from "features/popular/hooks";
import { useEffect, useState } from "react";
import "css/viewAll.css";

interface Props {
  type: "movie" | "series";
  page: number;
}

export const PosterDisplayAllPopular = ({ type, page }: Props) => {
  const results = usePopular(type, page);
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
