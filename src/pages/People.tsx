import React, { useEffect, useState } from "react";
import { getPopularPeople } from "../features/people/api";
import { getConfig } from "features/config/api";
import "../css/popularMovies.css";
import { filterPeopleInformation } from "features/people/functions";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
import { PersonObject } from "features/displayPostersSection/types";

// import { PopularPeopleFriends } from "sections/people/PopularPeopleFriends";
interface Props {}

export const People: React.FC<Props> = () => {
  const [popularPeople, setPopularPeople] = useState<PersonObject[]>();

  useEffect(() => {
    const fetch = async () => {
      const configuration = await getConfig();
      const { data: popPeople } = await getPopularPeople();
      const peopleData = filterPeopleInformation(configuration, popPeople);
      //console.log(peopleData);

      setPopularPeople(peopleData);
    };
    fetch();
  }, []);

  return (
    <>
      {popularPeople ? (
        <PosterDisplayPeople
          arr={popularPeople}
          sectionName="Popular People"
        ></PosterDisplayPeople>
      ) : null}
    </>
  );
};
