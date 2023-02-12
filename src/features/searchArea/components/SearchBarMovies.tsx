import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { getMovieDataSearch } from "features/movies/api";
import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../../css/searchBar.css";
import { useDebounce } from "../functions";
import { useFocus } from "../hooks";
import { MovieFound } from "./MovieFound";

export const SearchBarMovies = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 700);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const { data: searchResults } = useQuery(
    ["results", debouncedSearch],
    () => {
      return getMovieDataSearch(debouncedSearch);
    },
    {
      enabled: !!debouncedSearch,
    }
  );
  const { data: config } = useQuery("config", getConfig);

  // Check whether user clicked inside/outside of the search bar


  const focus = useFocus();

  return (
    <div
      className="search" id="search"
    >
      <div className="searchField">
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="searchResultsDisplay">
        {searchResults && config
          ? searchResults.results.map((elem, index) => {
              return (
                <Link to={elem.id.toString()} key={index}>
                  {focus ? (
                    <MovieFound
                      movieId={elem.id}
                      movieName={elem.title}
                      URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
                    ></MovieFound>
                  ) : null}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};
