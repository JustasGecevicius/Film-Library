// Hooks
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
// Components
import { Header } from "../../../header/components/Header";
import { SearchBarFriends } from "features/searchArea/components/searchFriends/SearchBarFriends";
// Styles
import "features/searchArea/css/searchArea.css";
// Functions
import { searchAreaImageLinksFetch } from "features/searchArea/functions";

export const SearchAreaFriends = () => {
  // State for the index of the image that switches on a timer
  const [imageIndex, setImageIndex] = useState<number>(0);

  // Fetched links from firebase for the top movies
  const { data: links } = useQuery(
    "backgroundImages",
    searchAreaImageLinksFetch
  );

  // useEffect that sets the interval for image changes
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    } else {
      if (links) {
        setInterval(() => {
          setImageIndex((prev) => (prev + 1) % links.length);
        }, 50000);
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
      <SearchBarFriends/>
    </div>
  );
};
