import { MovieObject } from "features/movies/types";
import { Link } from "react-router-dom";
import "features/poster/css/poster.css";
import star from "assets/starIcon.png";
import { PosterType } from "../../displayPostersSection/types";

export const PosterMovieSeries = ({
  imageURL,
  title,
  release_date,
  id,
  liked,
  rating,
  type,
}: MovieObject & PosterType) => {
  // Changes the Link based on whether the Poster is for a Movie or for a Series
  return (
    <>
      {id && (
        <Link
          to={
            type === "movie"
              ? `/Film-Library/movie/${id}`
              : `/Film-Library/series/${id}`
          }
          className="posterLink"
        >
          <div className="imagePoster">
            <img src={imageURL} alt="posterImage" className="posterImage" />
            {liked ? <img className="star" src={star} alt="starIcon" /> : null}
            {rating ? <p className="posterRating">{rating}</p> : null}
            <div className="posterText">
              <p>{title}</p>
              {release_date ? (
                <span className="posterDate">{release_date}</span>
              ) : null}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
