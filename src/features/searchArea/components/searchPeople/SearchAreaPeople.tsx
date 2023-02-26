// Hooks
import { useEffect, useRef, useState } from "react";
// Components
import { Header } from "../../../header/components/Header";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions

import { SearchBarPeople } from "./SearchBarPeople";
import { useSearchAreaImages } from "features/searchArea/hooks";
import { Fade } from "react-slideshow-image";

export const SearchAreaPeople = () => {

  //fetched links from firebase for the top movies
  const links = useSearchAreaImages();

  if (!links) {
    return <div>Loading...</div>;
  }
  return (
    <div className="slide-container">
      <Header/>
      <Fade>
        {links.map((imageLink, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={imageLink} alt="backgroundImage"/>
          </div>
        ))}
      </Fade>
      <SearchBarPeople/>
    </div>
  );
};
