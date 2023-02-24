// Hooks
import { useEffect, useRef, useState } from "react";
// Components
import { Header } from "../../../header/components/Header";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions

import { SearchBarPeople } from "./SearchBarPeople";
import { useSearchAreaImages } from "features/searchArea/hooks";

export const SearchAreaPeople = () => {
  //state for the index of the image that switches on a timer
  const [imageIndex, setImageIndex] = useState<number>(0);

  //fetched links from firebase for the top movies
  const links = useSearchAreaImages();

  // useEffect that sets the interval for image changes
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    } else {
      if (links) {
        setInterval(() => {
          setImageIndex((prev) => (prev + 1) % links.length);
        }, 500000);
        calledOnce.current = true;
      }
    }
  }, [links]);

  if (!links) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="backgroundSearchImage"
      style={{ backgroundImage: `url(${links[imageIndex]})` }}
    >
      <Header/>
      <SearchBarPeople/>
    </div>
  );
};
