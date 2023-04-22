// Hooks
import { useState } from "react";
import { useFocus } from "../../hooks";

// Styles
import "features/searchArea/css/searchBar.css";
import "features/searchArea/css/searchSwitch.css";
import { SearchResultsMovies } from "../searchMoviesSeries/SearchResultsMovies";
import { SearchResultsSeries } from "../searchMoviesSeries/SearchResultsSeries";
import { SearchTypeSwitch } from "../SearchTypeSwitch";
import { useParams } from "react-router-dom";

// HAVE TO FIX THE SEARCH ISSUE HERE, THE CODE LOOKS DISCUSTING
export const SearchBarMoviesSeries = () => {
  // State to track user input
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"movie" | "series">("movie");
  // Check whether user clicked inside/outside of the search bar
  const focus = useFocus();
  const {section} = useParams();
  console.log(section);
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
