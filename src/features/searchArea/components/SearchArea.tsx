import { useEffect, useRef, useState } from "react";
import { Header } from "../../header/components/Header";
import "../../../css/searchArea.css";
import { SearchBar } from "features/searchArea/components/SearchBar";
import { useQuery } from "react-query";
import { searchAreaImageLinksFetch } from "features/searchArea/functions";

export const SearchArea = () => {
  //state for the index of the image that switches on a timer
  const [imageIndex, setImageIndex] = useState<number>(0);

  //fetched links from firebase for the top movies
  const { data: links } = useQuery("movieImages", searchAreaImageLinksFetch);

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
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
};
