import { Link } from "react-router-dom";
import {
  UserPosterType,
} from "../../displayPostersSection/types";

export const UserPoster = ({ imageURL, name, id }: UserPosterType) => {
  return id ? (
    <Link to={`user/${id}`}>
      <div className="imagePoster" data-id={`${id}`}>
        <div
          className="posterImage"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
        {/* <img src={imageURL} alt="posterImage" className="posterImage" /> */}
        <div className="movieText">
          <p className="title">{name}</p>
        </div>
      </div>
    </Link>
  ) : null;
};
