// Hooks
import { useState } from "react";
// Styles
import "features/searchArea/css/searchBar.css";
// Components
import { UserFound } from "./UserFound";
import { useFocus, useSearchFriends } from "../../hooks";

export const SearchBarFriends = () => {
  // States for search and remove Index
  const [query, setQuery] = useState("");
  const [indexToRemove, setIndexToRemove] = useState<number>(-1);

  // Hook that returns the fetched results after a certain amount of time
  const searchResults = useSearchFriends(
    query,
    700,
    indexToRemove,
    setIndexToRemove
  );
  // Hook that hides the search results if the search bar is not in focus
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
      </div>
      <div className="searchResultsDisplay">
        {searchResults
          ? searchResults.map((elem, index) => {
              return focus ? (
                <UserFound
                  key={index}
                  friendIndex={index}
                  uid={elem.uid}
                  friendName={elem.friendName}
                  profileURL={elem.profileURL}
                  setIndexToRemove={setIndexToRemove}
                ></UserFound>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};
