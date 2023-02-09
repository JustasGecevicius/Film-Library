import { getConfig } from "features/config/api";
import { PersonObject } from "features/displayPostersSection/types";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPopularPeople } from "./api";
import { filterPeopleInformation } from "./functions";

export const usePopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState<PersonObject[]>();
  const {data : config} = useQuery("config", getConfig);
  useQuery(["people", config], getPopularPeople, {
    enabled: !!config,
    onSuccess:({data}) => {
      setPopularPeople(filterPeopleInformation(config, data));
    }
  })
return popularPeople;
}