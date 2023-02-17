import { useQuery } from "react-query";
import { Link } from "react-router-dom";

// API
import { getConfig } from "features/config/api";
import { getMovieDataSearch } from "features/movies/api";

// Components
import { FoundSearch } from "./FoundSearch";

// Styles
import "../../../css/searchBar.css";
import "../../../css/searchSwitch.css";

type Props = {
  search: string;
};

export const SearchBarMovieResults = ({ search }: Props) => {
  const { data: config } = useQuery("config", getConfig);

  const { data: movieResults } = useQuery(
    ["resultsMovie", search, "movie"],
    () => {
      return getMovieDataSearch(search);
    }
  );

  return (
    <>
      {config &&
        movieResults?.map((elem, index) => {
          return (
            <Link to={`/Film-Library/movie/${elem.id.toString()}`} key={index}>
              <FoundSearch
                id={elem.id}
                name={elem.title}
                URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
              />
            </Link>
          );
        })}
    </>
  );
};
