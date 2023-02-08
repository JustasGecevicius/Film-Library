import { MovieObject } from "features/movies/types";
import { Link } from "react-router-dom";

export const MoviePoster = ({ imageURL, title, release_date, id }: MovieObject) => {

  return (id ? <Link to={`${id}`}>
    <div className="imagePoster" data-id = {`${id}`} >
      <img src={imageURL} alt="posterImage" className="posterImage" />
      <div className="movieText">
        <p className="title">{title}</p>
        {release_date ? (<span className="date">{release_date}</span>) : (null)}
      </div>
    </div>
  </Link> : null
    
  );
};