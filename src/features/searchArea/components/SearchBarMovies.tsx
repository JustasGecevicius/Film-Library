// Hooks
import { useState } from "react";
import { useFocus } from "../hooks";

// Components
import {
  SearchBarMovieResults,
  SearchBarSeriesResults,
} from "features/searchArea/components";

// Styles
import "../../../css/searchBar.css";
import "../../../css/searchSwitch.css";

import { useDebounce } from "features/searchArea/functions";

export const SearchBarMovies = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 700);

  const [checkbox, setCheckbox] = useState<"movie" | "series">("movie");

  const focus = useFocus();

  const renderSearchResults = () => {
    if (!focus) return null;

    switch (checkbox) {
      case "movie":
        return <SearchBarMovieResults search={debouncedQuery} />;

      case "series":
        return <SearchBarSeriesResults search={debouncedQuery} />;

      default:
        return null;
    }
  };

  return (
    <div className="search" id="search">
      <div className="searchField">
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <label className="searchSwitch">
          <input
            type="checkbox"
            onChange={(e) => {
              setCheckbox(e.target.checked ? "series" : "movie");
            }}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div className="searchResultsDisplay">{renderSearchResults()}</div>
    </div>
  );
};
