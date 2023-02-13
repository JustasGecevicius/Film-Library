import { MovieObject } from "features/movies/types";
import { Link } from "react-router-dom";
import star from "../starIcon.png";
import { PosterType } from "../types";

export const MoviePoster = ({ imageURL, title, release_date, id, liked, rating, type }: MovieObject & PosterType) => {

  return (id ? <Link to={ type === "movie" ? `/Film-Library/movie/${id}` : `/Film-Library/series/${id}`}>
    <div className="imagePoster" data-id = {`${id}`} >
      <img src={imageURL} alt="posterImage" className="posterImage" />
      {liked ? <img className="star" src={star} alt="starIcon"/> : null}
      {rating ? <p className="posterRating">{rating}</p> : null}
      <div className="movieText">
        <p className="title">{title}</p>
        {release_date ? (<span className="date">{release_date}</span>) : (null)}
      </div>
    </div>
  </Link> : null
    
  );
};