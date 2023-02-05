import { PeoplePoster } from "features/displayPostersSection/components/PeoplePoster";
import { PeoplePosterDisplayType } from "../types";

export const PosterDisplayPeople = ({
  arr,
  sectionName,
}: PeoplePosterDisplayType) => {

  return (
    <div className="popularMoviesSection">
      <h2 className="sectionName">{sectionName}</h2>
      <div className="movieHolder">
        {arr.map((elem, index) => {
          return (
            <PeoplePoster
              key={index}
              imageURL={elem["imageURL"]}
              name={elem["name"]}
              id={elem["id"]}
            ></PeoplePoster>
          );
        })}
      </div>
    </div>
  );
};