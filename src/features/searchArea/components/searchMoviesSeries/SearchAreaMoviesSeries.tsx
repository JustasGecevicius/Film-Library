// Components
import { Header } from "features/header/components/Header";
import { SearchBarMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchBarMoviesSeries";
import "react-slideshow-image/dist/styles.css";
// Styles
import "features/searchArea/css/searchArea.css";
import { Fade } from "react-slideshow-image";

export interface Props {
  links: string[];
}

export const SearchAreaMoviesSeries = ({ links }: Props) => {
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
        <SearchBarMoviesSeries />
      </div>
    </div>
  );
};
