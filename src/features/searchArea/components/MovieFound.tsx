import { Link } from "react-router-dom";

interface MovieFound {
  movieId : number
  movieName : string
  URL : string
}

export const MovieFound = ({
  movieId,
  movieName,
  URL,
} : MovieFound) => {

  return (    
      <div className="foundMovie">
        <img src={URL} alt="movieImage" />
        <p className="foundMovieName">{movieName}</p>
      </div>
  );
};