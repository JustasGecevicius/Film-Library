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
import "../../../css/searchSwitch.css";
import { MovieData } from "features/movies/types";
import { Series } from "features/series/api";

// HAVE TO FIX THE SEARCH ISSUE HERE, THE CODE LOOKS DISCUSTING
export const SearchBarMovies = () => {
  // State to track user input
  const [query, setQuery] = useState("");
  const [checkbox, setChecbox] = useState<"movie" | "series">("movie");

  // Hooks to fetch the movies and config
  const searchResults = useSearchMoviesSeries(query, checkbox);
  const { data: config } = useQuery("config", getConfig);
  console.log(searchResults);
  // Check whether user clicked inside/outside of the search bar
  const focus = useFocus();

  // useEffect (() => {console.log(checkbox)},[checkbox]);

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
          <input type="checkbox" onChange={e => {
            console.log(e.target.checked);
            e.target.checked ? setChecbox("series") : setChecbox("movie");
          }}></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div className="searchResultsDisplay">
        {searchResults && config
          ? (checkbox === "movie" ? (searchResults as MovieData[]).map((elem, index) => {
              return (
                <Link
                  to={`/Film-Library/movie/${elem.id.toString()}`}
                  key={index}
                >
                  {focus ? (
                    <FoundSearch
                      id={elem.id}
                      name={elem.title}
                      URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
                    ></FoundSearch>
                  ) : null}
                </Link>
              );
            }) : (searchResults as Series[]).map((elem, index) => {
              return (
                <Link
                  to={`/Film-Library/series/${elem.id.toString()}`}
                  key={index}
                >
                  {focus ? (
                    <FoundSearch
                      id={elem.id}
                      name={elem.name}
                      URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
                    ></FoundSearch>
                  ) : null}
                </Link>
              );
            }))
          : null}
      </div>
    </div>
  );
};
