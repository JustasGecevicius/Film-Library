// API
import { getConfig } from "features/config/api";
import { getMovieDataSearch } from "features/movies/api";
// Hooks
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "../functions";
import { useFocus } from "../hooks";
// Components
import { Link } from "react-router-dom";
import { FoundSearch } from "./FoundSearch";
// Styles
import "../../../css/searchBar.css";

export const SearchBarPeople = () => {
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
          ? searchResults.map((elem, index) => {
              return (
                <Link to={`/Film-Library/movie/${elem.id.toString()}`} key={index}>
                  {focus ? (
                    <FoundSearch
                      id={elem.id}
                      name={elem.title}
                      URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
                    ></FoundSearch>
                  ) : null}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};