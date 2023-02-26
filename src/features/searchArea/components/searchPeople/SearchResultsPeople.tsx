import { getConfig } from "features/config/api";
import { useSearchPeople } from "features/searchArea/hooks";
import { SearchResultsPropsType } from "features/searchArea/types";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FoundSearch } from "features/searchArea/components/searchMoviesSeries/FoundSearch";

export const SearchResultsPeople = ({ query }: SearchResultsPropsType) => {
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000
  });
  const results = useSearchPeople(query, 700);
  return (
    <>
      {results && config && (
        results.map((elem, index) => {
          return (
            <Link to={`/Film-Library/person/${elem.id.toString()}`} key={index}>
              {elem.profile_path && <FoundSearch
                id={elem.id}
                name={elem.name}
                URL={`${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`}
              />}
            </Link>
          );
        })
      )}
    </>
  );
};