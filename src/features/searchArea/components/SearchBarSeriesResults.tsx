import { useQuery } from "react-query";
import { Link } from "react-router-dom";

// API
import { getConfig } from "features/config/api";
import { getSeriesDataSearch } from "features/series/api";

// Components
import { FoundSearch } from "./FoundSearch";

// Styles
import "../../../css/searchBar.css";
import "../../../css/searchSwitch.css";

type Props = {
  search: string;
};

export const SearchBarSeriesResults = ({ search }: Props) => {
  const { data: config } = useQuery("config", getConfig);

  const { data: seriesResults } = useQuery(
    ["resultsMovie", search, "movie"],
    () => {
      return getSeriesDataSearch(search);
    }
  );

  return (
    <>
      {config &&
        seriesResults?.map((elem, index) => {
          return (
            <Link to={`/Film-Library/series/${elem.id.toString()}`} key={index}>
              <FoundSearch
                id={elem.id}
                name={elem.name}
                URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
              />
            </Link>
          );
        })}
    </>
  );
};
