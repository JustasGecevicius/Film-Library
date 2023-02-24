// Hooks
import { useQuery } from "react-query";
// Components
import { Header } from "../../../header/components/Header";
import { SearchBarMoviesSeries } from "./SearchBarMoviesSeries";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions

import { useIndex } from "features/searchArea/hooks";

export interface Props {
  links : string[]
}

export const SearchAreaMoviesSeries = ({links} : Props) => {
const index = useIndex(links, 500000);

  if (!links) {
    return <div>Loading...</div>;
  }
  
  return (
    <div
      className="backgroundSearchImage"
      style={{ backgroundImage: `url(${links[index]})` }}
    >
      <Header/>
      <SearchBarMoviesSeries/>
    </div>
  );
};
