// Components
import { Header } from "features/header/components/Header";
import { SearchBarMoviesSeries } from "features/searchArea/components/searchBars/SearchBarMoviesSeries";
import "react-slideshow-image/dist/styles.css";
// Styles
import "features/searchArea/css/searchArea.css";
import { Fade } from "react-slideshow-image";
import { SearchBarFriends } from "./searchBars/SearchBarFriends";
import { SearchBarPeople } from "./searchBars/SearchBarPeople";

export interface Props {
  links: string[];
  type: "movieSeries" | "friends" | "cast" | "people";
  SearchBar?: JSX.Element;
}

export const SearchArea = ({ links, type }: Props) => {
  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slide-container">
      <Fade>
        {links.map((imageLink, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={imageLink}
              alt="backgroundImage"
            />
          </div>
        ))}
      </Fade>
      <div className="slideOverlay">
        <Header />
        <>
          {(() => {
            switch (type) {
              case "movieSeries":
                return <SearchBarMoviesSeries />;
              // case 'cast':
              //   return //<SearchBarCast>
              case "friends":
                return <SearchBarFriends />;
              case "people":
                return <SearchBarPeople />;
              default:
                return <></>;
            }
          })()}
        </>
      </div>
    </div>
  );
};
