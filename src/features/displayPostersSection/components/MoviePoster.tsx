import { MovieObject } from "features/movies/types";
import { Link } from "react-router-dom";
import star from "../starIcon.png";

export const MoviePoster = ({ imageURL, title, release_date, id, liked }: MovieObject) => {

  return (id ? <Link to={`${id}`}>
    <div className="imagePoster" data-id = {`${id}`} >
      <img src={imageURL} alt="posterImage" className="posterImage" />
      {liked ? <img className="star" src={star} alt="starIcon"/> : null}
      <div className="movieText">
        <p className="title">{title}</p>
        {release_date ? (<span className="date">{release_date}</span>) : (null)}
      </div>
    </div>
  </Link> : null
    
  );
};