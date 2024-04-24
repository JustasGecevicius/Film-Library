// Hooks
import { useState } from "react";
import { useFocus } from "../../hooks";

// Styles
import '../../css/searchBar.css';
import '../../css/searchSwitch.css';
import { SearchResultsMovies } from "../searchMoviesSeries/SearchResultsMovies";
import { SearchResultsSeries } from "../searchMoviesSeries/SearchResultsSeries";
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
        <SearchTypeSwitch setType={setType} />
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
