import { Poster } from "features/displayPostersSection/components/Poster";
import { MoviesPosterDisplayType, PosterType } from "../types";

export const PosterDisplayMovies = ({
  arr,
  sectionName,
  type,
}: MoviesPosterDisplayType & PosterType) => {
  return (
    <div className="popularMoviesSection">
      <h2 className="sectionName">{sectionName}</h2>
      <div className="movieHolder">
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
