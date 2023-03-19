// Hooks
import { useState } from "react";
import { useFocus } from "../../hooks";
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
