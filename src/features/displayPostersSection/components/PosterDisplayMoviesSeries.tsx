import { Poster } from "features/displayPostersSection/components/Poster";
import { Link } from "react-router-dom";
import { MoviesPosterDisplayType, PosterType } from "../types";
import "features/displayPostersSection/css/posterDisplay.css";

export const PosterDisplayMoviesSeries = ({
  arr,
  sectionName,
  type,
}: MoviesPosterDisplayType & PosterType) => {
  return (
    <div className="section">
      <div className="sectionInfo">
        <h2 className="sectionName">{sectionName}</h2>
        <Link to={`/Film-Library/all/${type}/${sectionName}`}>
          <button className="viewAllButton">View All</button>
        </Link>
      </div>
      <div className="posterHolder">
        {arr.map((elem, index) => {
          return (
            <Poster
              key={index}
              imageURL={elem.imageURL}
              title={elem.title}
              release_date={elem.release_date}
              id={elem.id}
              liked={elem.liked}
              rating={elem.rating}
              type={type}
            ></Poster>
          );
        })}
      </div>
    </div>
  );
};
