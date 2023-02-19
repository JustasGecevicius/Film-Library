// Hooks
import { useQuery } from "react-query";
// Components
import { Header } from "../../../header/components/Header";
import { SearchBarMoviesSeries } from "./SearchBarMoviesSeries";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions
import { searchAreaImageLinksFetch } from "features/searchArea/functions";
import { useIndex } from "features/searchArea/hooks";

export const SearchAreaMoviesSeries = () => {

  // Fetched links from firebase for the top movies
  const { data: links } = useQuery(
    "backgroundImages",
    searchAreaImageLinksFetch
  );
  // A hook that changes the index on a set timer
  const index = useIndex(links, 500000);

  if (!links) {
    return <div>Loading...</div>;
  }
  
  return (
    <div
      className="backgroundSearchImage"
      style={{ backgroundImage: `url(${links[index]})` }}
    >
      <Header></Header>
      <SearchBarMoviesSeries></SearchBarMoviesSeries>
    </div>
  );
};
