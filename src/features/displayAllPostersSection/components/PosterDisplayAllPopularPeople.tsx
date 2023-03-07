import { useEffect, useState } from "react";
import { usePopularPeople } from "features/people/hooks";
import { PersonObject } from "features/displayPostersSection/types";
import { PeoplePoster } from "features/poster/components/PeoplePoster";

interface Props {
  page: number;
}

export const PosterDisplayAllPopularPeople = ({ page }: Props) => {
  const results = usePopularPeople(page);
  const [combinedResults, setCombinedResults] = useState<PersonObject[]>();
  useEffect(() => {
    if (!results) return;
    setCombinedResults((prev) => {
      return prev ? [...prev, ...results] : [...results];
    });
  }, [results]);

  return combinedResults ? (
    <div className="movieHolderAll">
      {combinedResults.map((elem, index) => {
        return (
          <PeoplePoster
            key={index}
            imageURL={elem.imageURL}
            name={elem.name}          
            id={elem.id}
          />
        );
      })}
    </div>
  ) : null;
};