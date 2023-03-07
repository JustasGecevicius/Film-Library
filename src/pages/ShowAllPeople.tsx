import { useState } from "react";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css";

import { SearchAreaPeople } from "features/searchArea/components/searchPeople/SearchAreaPeople";
import { PosterDisplayAllPopularPeople } from "features/displayAllPostersSection/components/PosterDisplayAllPopularPeople";
import { PosterDisplayAllFriendLikedPeople } from "features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople";

interface Params {
  section: "Popular" | "FriendLiked";
}

export const ShowAllPeople = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { section } = useParams<keyof Params>() as Params;
  return (
    <div className="showAll">
      <SearchAreaPeople />
      <div className="posterDisplayAllWrapper">
        <h2 className="sectionName">
          {section === "Popular" ? "Popular People" : "Friend Suggestions"}
        </h2>
        {section === "Popular" && (
          <PosterDisplayAllPopularPeople page={pageNumber} />
        )}
        {section === "FriendLiked" && <PosterDisplayAllFriendLikedPeople />}

        <button
          className="moreMovies"
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};
