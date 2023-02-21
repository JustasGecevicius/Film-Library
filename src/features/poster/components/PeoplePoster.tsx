import { Link } from "react-router-dom";
import { PersonObject } from "../../displayPostersSection/types";

export const PeoplePoster = ({ imageURL, name, id }: PersonObject) => {
  return id ? (
    <Link to={`/Film-Library/person/${id}`}>
      <div className="imagePoster" data-id={`${id}`}>
        <img src={imageURL} alt="posterImage" className="posterImage" />
        <div className="movieText">
          <p className="title">{name}</p>
        </div>
      </div>
    </Link>
  ) : null;
};
