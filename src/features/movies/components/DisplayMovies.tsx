import { MovieObjectType } from "features/movies/types";

import { ImagePoster } from "reusableComponents/ImagePoster";

type Props = {
  sectionName: string;
  movieArray: MovieObjectType[];
};

export const DisplayMovies = ({ sectionName, movieArray }: Props) => (
  <div className="popularMoviesSection">
    <h2 className="sectionName">{sectionName}</h2>
    <div className="movieHolder">
      {movieArray.map((movie, index) => {
        return (
          <ImagePoster
            key={index}
            imageLink={movie["imageURL"]}
            name={movie["title"] || movie["name"]}
            releaseDate={movie["release_date"]}
            id={movie["id"]}
          />
        );
      })}
    </div>
  </div>
);
