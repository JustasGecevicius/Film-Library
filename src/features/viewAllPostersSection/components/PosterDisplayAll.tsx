// Components
import { Poster } from "features/displayPostersSection/components/Poster";
// Types
import {
  MoviesPosterDisplayType,
  PosterType,
} from "features/displayPostersSection/types";

export const PosterDisplayAll = ({
  arr,
  type,
}: MoviesPosterDisplayType & PosterType) => {
  return (
    <div className="popularMoviesSection">
      <div className="allHolder">
        {arr.map((elem, index) => {
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
    </div>
  );
};
