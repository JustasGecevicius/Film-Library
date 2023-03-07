import { PeoplePoster } from "features/poster/components/PeoplePoster";
import { PeoplePosterDisplayType } from "../types";
import "features/displayPostersSection/css/posterDisplay.css";
import { Link } from "react-router-dom";

export const PosterDisplayPeople = ({
  arr,
  sectionName,
  link
}: PeoplePosterDisplayType) => {
  return <>{arr.length !==0 &&
    <div className="section">
      <div className="sectionInfo">
        <h2 className="sectionName">{sectionName}</h2>
        <Link to={`/Film-Library/allPeople/${link}`}>
          <button className="viewAllButton">View All</button>
        </Link>
      </div>
      <div className="posterHolder">
        {arr.map((elem, index) => {
          return (
            <PeoplePoster
              key={index}
              imageURL={elem.imageURL}
              name={elem.name}
              id={elem.id}
            ></PeoplePoster>
          );
        })}
      </div>
    </div>
}</>
};
