// Hooks
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
// Components
import { Header } from "../../../header/components/Header";
import { SearchBarFriends } from "features/searchArea/components/searchFriends/SearchBarFriends";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions
import { useSearchAreaImages } from "features/searchArea/hooks";
import { Fade } from "react-slideshow-image";

export const SearchAreaFriends = () => {
  // Fetched links from firebase for the top movies
  const links = useSearchAreaImages();

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
      <div className="slideContainerElements">
        <Header />
        <SearchBarFriends />
      </div>
    </div>
  );
};
