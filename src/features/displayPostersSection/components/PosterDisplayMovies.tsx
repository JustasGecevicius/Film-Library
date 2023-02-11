
import { MoviePoster } from "features/displayPostersSection/components/MoviePoster";
import { MoviesPosterDisplayType } from "../types";


export const PosterDisplayMovies = ({
  arr,
  sectionName,
}: MoviesPosterDisplayType) => {
  return (
    <div className="popularMoviesSection">
      <h2 className="sectionName">{sectionName}</h2>
      <div className="movieHolder">
        {arr.map((elem, index) => {
          return (
            <MoviePoster
              key={index}
              imageURL={elem["imageURL"]}
              title={elem["title"]}
              release_date={elem["release_date"]}
              id={elem["id"]}
            ></MoviePoster>
          );
        })}
      </div>
    </div>
  );
};