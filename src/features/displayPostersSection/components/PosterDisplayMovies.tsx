
import { MoviePoster } from "features/displayPostersSection/components/MoviePoster";
import { POSTER_IMAGE_BASE_URL } from "../constants";
import { MoviesPosterDisplayType } from "../types";


export const PosterDisplayMovies = ({
  arr,
  sectionName,
}: MoviesPosterDisplayType) => {
  return (arr ? 

    <div className="popularMoviesSection">
      <h2 className="sectionName">{sectionName}</h2>
      <div className="movieHolder">
        {arr.map((elem, index) => {
          return ( 
            <MoviePoster
              key={index}
              imageURL={`${POSTER_IMAGE_BASE_URL}${elem.poster_path}`}
              title={elem.title}
              release_date={elem.release_date}
              id={elem.id}
              liked={elem.liked}
            />
          );
        })}
      </div>
    </div> : null
  );
};
