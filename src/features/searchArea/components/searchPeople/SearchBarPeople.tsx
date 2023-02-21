// API
import { getConfig } from "features/config/api";
import { getMovieDataSearch } from "features/movies/api";
// Hooks
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "../../functions";
import { useFocus } from "../../hooks";
// Components
import { Link } from "react-router-dom";
import { FoundSearch } from "../searchMoviesSeries/FoundSearch";
// Styles
import "features/searchArea/css/searchBar.css";
import { SearchResultsPeople } from "./SearchResultsPeople";

export const SearchBarPeople = () => {
  // State to track user input
  const [query, setQuery] = useState("");
  // Check whether user clicked inside/outside of the search bar
  const focus = useFocus();

  return (
    <div className="search" id="search">
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
      {focus && query !== "" && <div className="searchResultsDisplay">
        <SearchResultsPeople query={query}/>
      </div>}
    </div>
  );
};
