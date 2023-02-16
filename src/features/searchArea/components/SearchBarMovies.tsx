// API
import { getConfig } from "features/config/api";
// Hooks
import { useState } from "react";
import { useQuery } from "react-query";
import { useFocus, useSearchMoviesSeries } from "../hooks";
// Components
import { Link } from "react-router-dom";
import { FoundSearch } from "./FoundSearch";
// Styles 
import "../../../css/searchBar.css";

export const SearchBarMovies = () => {
  // State to track user input
  const [query, setQuery] = useState("");
  
  // Hooks to fetch the movies and config
  const searchResults = useSearchMoviesSeries(query)
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
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
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
