import { ImagePoster } from "./ImagePoster";
import { MoviePosterDisplayType } from "features/movies/types";

export const PosterDisplay = ({ arr, sectionName }: MoviePosterDisplayType) => {
  return (
    <div className="popularMoviesSection">
      <h2 className="sectionName">{sectionName}</h2>
      <div className="movieHolder">
        {arr.map((elem, index) => {
          return (
            <ImagePoster
              key={index}
              imageLink={elem["imageURL"]}
              name={elem["title"] || elem["name"]}
              releaseDate={elem["release_date"]}
              id={elem["id"]}
            ></ImagePoster>
          );
        })}
      </div>
    </div>
  );
};
