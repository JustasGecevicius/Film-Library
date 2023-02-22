import { getConfig } from "features/config/api";
import { useSearchSeries } from "features/searchArea/hooks";
import { SearchResultsPropsType } from "features/searchArea/types";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FoundSearch } from "./FoundSearch";

export const SearchResultsSeries = ({ query } : SearchResultsPropsType) => {
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 1800000
  });
  const results = useSearchSeries(query, 700);
  return (
    <>
      {results && config ? (
        results.map((elem, index) => {
          return (
            <Link to={`/Film-Library/movie/${elem.id.toString()}`} key={index}>
              {elem.poster_path && <FoundSearch
                id={elem.id}
                name={elem.name}
                URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
              />}
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};