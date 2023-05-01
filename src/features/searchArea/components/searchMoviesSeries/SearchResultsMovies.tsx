import { useSearchMovies } from "features/searchArea/hooks";
import { SearchResultsPropsType } from "features/searchArea/types";
import { Link } from "react-router-dom";
import { FoundSearch } from "features/searchArea/components/searchMoviesSeries/FoundSearch";
import { useConfig } from "features/utils/moviedb";

export const SearchResultsMovies = ({ query }: SearchResultsPropsType) => {
  const { config } = useConfig();
  const results = useSearchMovies(query, 700);
  return (
    <>
      {results && config ? (
        results.map((elem, index) => {
          return (
            <Link to={`/Film-Library/movie/${elem.id.toString()}`} key={index}>
              {elem.poster_path && <FoundSearch
                id={elem.id}
                name={elem.title}
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
