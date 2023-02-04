import React, { useEffect, useState } from "react";
import { getPopularPeople } from "../features/people/api";
import { getConfig } from "features/config/api";
import "../css/popularMovies.css";
import { filterPeopleInformation } from "features/people/functions";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
import { PersonObject } from "features/displayPostersSection/types";
import { SearchArea } from "features/searchArea/components/SearchArea";
import { useQuery } from "react-query";

// import { PopularPeopleFriends } from "sections/people/PopularPeopleFriends";
interface Props {}

export const People: React.FC<Props> = () => {
  const [popularPeople, setPopularPeople] = useState<PersonObject[]>();

  const {data : config} = useQuery("config", getConfig);
  useQuery(["people", config], getPopularPeople, {
    enabled: !!config,
    onSuccess:({data}) => {
      setPopularPeople(filterPeopleInformation(config, data));
    }
  })

  useEffect (() => {console.log(popularPeople)},[popularPeople]);

  return (
    <>
    <SearchArea></SearchArea>
      {popularPeople ? (
        <PosterDisplayPeople
          arr={popularPeople}
          sectionName="Popular People"
        ></PosterDisplayPeople>
      ) : null}
    </>
  );
};
