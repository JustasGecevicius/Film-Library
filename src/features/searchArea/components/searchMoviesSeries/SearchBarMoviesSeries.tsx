// Hooks
import { useState } from "react";
import { useFocus } from "../../hooks";

// Styles
import "features/searchArea/css/searchBar.css";
import "features/searchArea/css/searchSwitch.css";
import { SearchResultsMovies } from "./SearchResultsMovies";
import { SearchResultsSeries } from "./SearchResultsSeries";
import { SearchTypeSwitch } from "../SearchTypeSwitch";

// HAVE TO FIX THE SEARCH ISSUE HERE, THE CODE LOOKS DISCUSTING
export const SearchBarMoviesSeries = () => {
  // State to track user input
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"movie" | "series">("movie");
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
            setQuery(e.target.value);
          }}
        />
        <SearchTypeSwitch setType={setType}></SearchTypeSwitch>
      </div>
      {focus && query !== "" && (
        <div className="searchResultsDisplay">
          {type === "movie" ? (
            <SearchResultsMovies query={query} />
          ) : (
            <SearchResultsSeries query={query} />
          )}
        </div>
      )}
    </div>
  );
};
