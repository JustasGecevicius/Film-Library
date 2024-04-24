// Hooks
import { useEffect, useRef, useState } from "react";
// Components
import { Header } from "../../../header/components/Header";
// Styles
import '../../../searchArea/css/searchArea.css';
// Functions

import { SearchBarPeople } from '../searchBars/SearchBarPeople';
import { useSearchAreaImages } from '../../../searchArea/hooks';
import { Fade } from "react-slideshow-image";

export const SearchAreaPeople = () => {
  //fetched links from firebase for the top movies
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
      <div className="slideOverlay">
        <Header />
        <SearchBarPeople />
      </div>
    </div>
  );
};
